import styled from "styled-components";
import { formatCurrency } from "../utils";
import CartContext from "../context/Cart/CartContext";
import { useContext } from "react";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const { addToCart, increase, cartItems, sumItems, itemCount } =
    useContext(CartContext);

  //Check whether the product is in the cart or not
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <CardWrapper
      as={motion.div}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      layout
    >
      <ProductImage
        src={product.images[1] || product.images + "?v=" + product.id}
        alt={product.title}
      />
      <p className='text-[0.9rem] text-left m-[1rem]' >{product.title}</p>
      <h3 className='text-[1.5rem] font-["Work_Sans",_sans-serif] text-left font-medium mb-[0.7rem]' >{formatCurrency(product.price)}</h3>
      <ProductCardButtons>
        {isInCart(product) && (
          <ButtonAddMore
            onClick={() => {
              increase(product);
            }}
            className="btn"
          >
            Add More
          </ButtonAddMore>
        )}

        {!isInCart(product) && (
          <Button className='text-[#fff] bg-[#1a1a1a] border-[#1a1a1a] px-[1rem] py-[0.5rem] leading-normal text-[10px] rounded-none uppercase cursor-pointer rounded-[3px]'  onClick={() => addToCart(product)}>Add to Cart</Button>
        )}
      </ProductCardButtons>
    </CardWrapper> 
  );
};

//Styled Components
const CardWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0 8px 3px 3px;
  flex: 1 1 auto;
  padding: 1.25rem;
  text-align: center;
`;

const ProductImage = styled.img`
  margin: 0 auto 10px;
  max-height: 200px;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  align-self: center;
`;





const ProductCardButtons = styled.div`
  text-align: right;
`;

const Button = styled.button`
  color: #fff;
  background-color: #1a1a1a;
  border-color: #1a1a1a;
  padding: 0.5rem 1rem;
  line-height: 1.5;
  font-size: 10px;
  border-radius: 0;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 3px;
`;

const ButtonAddMore = styled(Button)`
  color: #1a1a1a;
  border: 2px solid #1a1a1a;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    color: #fff;
    background-color: #1a1a1a;
    border: 2px solid #1a1a1a;
  }
`;

export default ProductCard;
