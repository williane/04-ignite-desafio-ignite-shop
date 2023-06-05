import Image from "next/image";
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
  const { 
    handleCartClick, 
    shouldDisplayCart, 
    cartDetails, 
    cartCount, 
    formattedTotalPrice,
    removeItem, 
  } = useShoppingCart();
  const toggleOpen = shouldDisplayCart ? "open" : "close";

  const cart = Object.entries(cartDetails!).map((product) => product[1]);

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
                  <button onClick={() => removeItem(product.id)}>Remover</button>
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
        <CheckoutButton>Finalizar compra</CheckoutButton>
      </CartProducts>
    </CartContainer>
  );
}
