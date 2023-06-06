import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, ImageWrapper, SuccessContainer } from "../styles/pages/success";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
}


interface SuccessProps {
  costumerName: string;
  products: Product[];
}

export default function Success({ costumerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada</h1>

        <ImageWrapper>
          {products.map(product => (
            <ImageContainer key={product.id}>
            <Image src={product.imageUrl} width={120} height={110} alt="" />
          </ImageContainer>
          ))}
        </ImageWrapper>

        <p>
          Uhuul <strong>{costumerName}</strong>, sua{" "}
          compra de {products.length} {products.length > 1 ? 'camisetas' : 'camiseta'} já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const costumerName = session.customer_details?.name;
  const product = session.line_items?.data[0]?.price?.product as Stripe.Product;

  const products = session.line_items?.data.map((product) => {
    const stripeProduct = product.price?.product as Stripe.Product
    return {
      id: stripeProduct.id,
      name: stripeProduct.name, 
      imageUrl: stripeProduct.images[0] 
    }
  } )

  return {
    props: {
      costumerName,
      products
    },
  };
};
