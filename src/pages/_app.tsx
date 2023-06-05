import { AppProps } from "next/app";
import Image from "next/image";
import Link from "next/link";
import { CartProvider } from "use-shopping-cart";
import { globalStyles } from "../styles/global";
import { Container, Header } from "../styles/pages/app";
import { Cart } from "../components/Cart";
import { CartButton } from "../components/CartButton";
import logoImg from "../assets/logo.svg";

globalStyles();
const stripeKey: string = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!;

function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={stripeKey}
      successUrl={`${process.env.NEXT_PUBLIC_URL}/success`}
      cancelUrl={`${process.env.NEXT_PUBLIC_URL}/?success=false`}
      currency="BRL"
      allowedCountries={["BR"]}
      shouldPersist={true}
    >
      <Container>
        <Header>
          <Link href="/">
            <Image src={logoImg} alt="" />
          </Link>
          <CartButton />
        </Header>
        <Cart />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}

export default App;
