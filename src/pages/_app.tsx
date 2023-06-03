import { AppProps } from "next/app"
import Image from "next/image"
import { globalStyles } from "../styles/global"
import { Cart, Container, Header, Pin } from "../styles/pages/app"
import logoImg from "../assets/logo.svg"
import {HiOutlineShoppingBag} from 'react-icons/hi'

globalStyles()

function App({ Component, pageProps }: AppProps) {
 return (
    <Container>
      <Header>
      <Image src={logoImg} alt="" />
      <Cart>
        <HiOutlineShoppingBag size={24} />
        <Pin>1</Pin>
      </Cart>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}

export default App
