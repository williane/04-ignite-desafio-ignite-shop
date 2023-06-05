import { useShoppingCart } from "use-shopping-cart";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Cart, Pin } from "../../styles/components/cartButton";

export function CartButton() {
  const { cartCount, handleCartClick} = useShoppingCart();

  return (
    <Cart onClick={() => handleCartClick()}>
      <HiOutlineShoppingBag size={24} />
      {cartCount ? <Pin>{cartCount}</Pin> : null}
    </Cart>
  );
}
