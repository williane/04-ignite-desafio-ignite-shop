import Image from "next/image"
import {CartContainer, CloseContainer,CartProducts,ProductContainer,Product,ProductDetails, ProductsList, Subtotals, CheckoutButton } from '../../styles/components/cart'
import { IoClose } from "react-icons/io5"

import camiseta1 from '../../assets/camisetas/1.png'

export function Cart(){
  return(
    <CartContainer>
        <CloseContainer>
          <IoClose size={24} />
        </CloseContainer>
        <strong>Sacola de compras</strong>
        <CartProducts>
          <ProductsList>
          <ProductContainer>
            <Product>
            <Image src={camiseta1} alt="" />
            </Product>
            <ProductDetails>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </ProductDetails>
          </ProductContainer>
          <ProductContainer>
            <Product>
            <Image src={camiseta1} alt="" />
            </Product>
            <ProductDetails>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </ProductDetails>
          </ProductContainer>
          <ProductContainer>
            <Product>
            <Image src={camiseta1} alt="" />
            </Product>
            <ProductDetails>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </ProductDetails>
          </ProductContainer>
          </ProductsList>
          <Subtotals>
            <div>
              <span>Quantidade</span>
              <span>3 itens</span>
            </div>
            <div>
              <strong>Valor total </strong>
              <strong>R$ 270,00</strong>
            </div>
          </Subtotals>
          <CheckoutButton>Finalizar compra</CheckoutButton>
        </CartProducts>
      </CartContainer>
  )
}