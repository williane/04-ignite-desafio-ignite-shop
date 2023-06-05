import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useShoppingCart } from "use-shopping-cart";
import {
  CartContainer,
  CloseContainer,
  CartProducts,
  ProductContainer,
  Product,
  ProductDetails,
  ProductsList,
  Subtotals,
  CheckoutButton,
} from "../../styles/components/cart";
import { IoClose } from "react-icons/io5";

export function Cart() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);
  const {
    handleCartClick,
    shouldDisplayCart,
    cartDetails,
    cartCount,
    formattedTotalPrice,
    removeItem,
    clearCart
  } = useShoppingCart();
  const toggleOpen = shouldDisplayCart ? "open" : "close";
  const isCheckoutDisabled = isCreatingCheckoutSession || cartCount! <= 0

  const cart = Object.entries(cartDetails!).map((product) => product[1]);

  async function handleBuyButton() {
    try {
      setIsCreatingCheckoutSession(true);
      const products = cart.map((product) => {
        return { price: product.price_id, quantity: product.quantity };
      });

      const response = await axios.post("/api/checkout", {
        products,
      });

      clearCart()

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);

      alert("Falha ao redirecionar ao checkout!");
    }
  }

  return (
    <CartContainer display={toggleOpen}>
      <CloseContainer>
        <button onClick={() => handleCartClick()}>
          <IoClose size={24} />
        </button>
      </CloseContainer>
      <strong>Sacola de compras</strong>
      <CartProducts>
        <ProductsList>
          {cart.length > 0 &&
            cart.map((product) => (
              <ProductContainer key={product.id}>
                <Product>
                  <Image src={product.image!} width={520} height={480} alt="" />
                </Product>
                <ProductDetails>
                  <span>{product.name}</span>
                  <strong>{product.formattedValue}</strong>
                  <button onClick={() => removeItem(product.id)}>
                    Remover
                  </button>
                </ProductDetails>
              </ProductContainer>
            ))}
        </ProductsList>
        <Subtotals>
          <div>
            <span>Quantidade</span>
            <span>{cartCount} itens</span>
          </div>
          <div>
            <strong>Valor total </strong>
            <strong>{formattedTotalPrice}</strong>
          </div>
        </Subtotals>
        <CheckoutButton
          disabled={isCheckoutDisabled}
          onClick={handleBuyButton}
        >
          Finalizar compra
        </CheckoutButton>
      </CartProducts>
    </CartContainer>
  );
}
