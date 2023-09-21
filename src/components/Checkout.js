import { formatCurrency } from "../utils";
import { useContext } from "react";
import CartContext from "../context/Cart/CartContext";

const Checkout = () => {
  const { clearCart, handleCheckout, itemCount, total } =
    useContext(CartContext);

  return (
    <div className='m-[3rem] border-solid border-2 border-sky-[#1a1a1a] px-[1rem] py-[1rem]'>
      <p>Total Items:</p>
      <h4>{itemCount}</h4>
      <p>Total Payment:</p>
      <h4>{formatCurrency(total)}</h4>
      <hr />
      <div>
        <button className='text-[#fff] bg-[#b0960a] px-[1rem] py-[0.5rem] leading-normal text-[10px] rounded-none uppercase cursor-pointer outline-[none]' onClick={handleCheckout}>CHECKOUT</button>
        <button className='text-[#fff] bg-[red] px-[1rem] py-[0.5rem] leading-normal text-[10px] rounded-none uppercase cursor-pointer outline-[none]' onClick={clearCart}>CLEAR</button>
      </div>
    </div>
  );
};

export default Checkout;


