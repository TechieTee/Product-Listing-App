import { useContext } from "react";
import { formatCurrency } from "../utils";
import TrashIcon from "../assets/icons/trash-outline.svg";
import Plus from "../assets/icons/add-circle-outline.svg";
import Minus from "../assets/icons/remove-circle-outline.svg";
import CartContext from "../context/Cart/CartContext";

const CartItem = ({ product }) => {
  const { removeFromCart, increase, decrease } = useContext(CartContext);

  return (
    <div className='[border-bottom:1px_solid_gray] px-[0] py-[10px] mt-[10px] flex items-center justify-around w-full [border-top:1px_solid_gray]'>
      <img className='w-[100px] h-auto pr-[2rem]' src={product.images[1] || product.images} alt={product.name} />
      <div>
        <h5>{product.title}</h5>
        <p>{formatCurrency(product.price)}</p>
      </div>

      {/* Buttons */}
      <div className='flex items-center justify-around'>
        <button
          onClick={() => increase(product)}
          className="btn btn-primary btn-sm mr-2 mb-1 bg-[red]"
        >
          <img className='w-[1.6rem] h-auto' src={Plus} alt=""></img>
        </button>

        <div>
          <p>Qty: {product.quantity}</p>
        </div>

        {product.quantity > 1 && (
          <button onClick={() => decrease(product)} className="btn">
            <img className='w-[1.6rem] h-auto' src={Minus} alt=""></img>
          </button>
        )}

        {product.quantity === 1 && (
          <button onClick={() => removeFromCart(product)} className="btn">
            <img className='w-[1.6rem] h-auto' src="TrashIcon" alt=""></img>
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
