import Image from "next/image";
import Head from "next/head";
import { GetStaticProps } from "next";
import Link from "next/link";

import Stripe from "stripe";
import { stripe } from "../lib/stripe"
import { useShoppingCart } from "use-shopping-cart";
import { HomeContainer, Product } from "../styles/pages/home"
import {HiOutlineShoppingBag} from 'react-icons/hi'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    defaultPrice: number
    description: string
    defaultPriceId: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const { addItem, cartDetails } = useShoppingCart()
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  function handleCartButton(id: string){
    const product = products.filter(product => product.id === id)
    const productCart = {
      name: product[0].name,
      description: product[0].description,
      id: product[0].id,
      price: product[0].defaultPrice,
      price_id: product[0].defaultPriceId,
      currency: 'BRL',
      image: product[0].imageUrl
    }
    if(cartDetails && cartDetails[id]){
      return
    }
    addItem(productCart)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>
                  <button onClick={() => handleCartButton(product.id)}>
                    <HiOutlineShoppingBag size={32} color="#FFF" />
                  </button>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount ? price.unit_amount / 100 : 0),
      defaultPrice:price.unit_amount,
      description: product.description,
      defaultPriceId: price.id
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours,
  };
};
