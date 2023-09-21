import CartItem from "../components/CartItem";
import { useContext } from "react";
import Checkout from "../components/Checkout";
import { Link } from "react-router-dom";
import CartContext from "../context/Cart/CartContext";

const Cart = () => {
  // Extract the cart state from the context
  const { cartItems, checkout, clearCart } = useContext(CartContext);

  return (
    <>
      <div className='mt-[8rem] text-center' ><h1>
          Shopping Cart
          <span>({cartItems.length})</span>
        </h1></div>

      {checkout && (
        <div className='ml-[0] mr-[0] my-[0.5rem] text-center' ><h4>Thank you for your purchase!</h4><p>
            Your order has been placed and will be delivered to you within 24
            hours.
          </p><Link to="/">
            <button className='ml-[0] mr-[0] py-[0.5rem] px-[1rem] my-[2rem] bg-[#b0960a] text-[white]' onClick={clearCart}>Continue Shopping</button>
          </Link></div>
      )}

      <div className='flex justify-around items-start m-auto w-[85%] flex-col items-center mt-[3rem]'>
        <div>
          {
            <div className='flex flex-wrap flex-col items-center justify-around text-center'>
              {cartItems.length === 0 ? (
                <h4 style={{}}>Cart is empty</h4>
              ) : (
                <ul>
                  {cartItems.map((product) => (
                    <CartItem key={product.id} product={product} />
                  ))}
                </ul>
              )}
            </div>
          }
        </div>

        <div>
          {/* Checkout component  */}
          {cartItems.length > 0 && <Checkout />}
        </div>
      </div>
    </>
  );
};
export default Cart;

