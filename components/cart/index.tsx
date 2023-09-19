import Cookies from 'js-cookie';
import { getCart } from 'lib/shopify';
import CartModal from './modal';

export default async function Cart() {
  const cartId = Cookies.get('cartId');
  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }

  return <CartModal cart={cart} />;
}
