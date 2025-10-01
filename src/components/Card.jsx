import React from "react";
import Eye from "./Eye";
import Heart from "./Heart";
import Rating from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const { wishlistStore } = useSelector((state) => state.wishlist);
  const {cartStore} = useSelector(state => state.cartSlice)
  const isInCart = cartStore.some(card => card.id === item.id)
  const cart = wishlistStore.some((card) => card.id === item.id);
  console.log(cartStore);
  console.log(wishlistStore);
  
  
  return (
    <div className="group">
      <div className="relative flex items-center justify-center  w-[270px] h-[250px] bg-[#F5F5F5]  rounded">
        <img src={item.img} alt={item.title} />
        <Eye className={"absolute top-[54px] right-3"} />
        <Heart
          strokeColor={cart ? "red" : "black"}
          currentColor={cart ? "red" : "white"}
          className={`absolute text-white  top-3 right-3 cursor-pointer ${
            cart ? "text-red-500" : ""
          }`}
          onClick={() => dispatch(addToWishlist(item))}
        />
        <div className="w-[55px] h-[26px] flex items-center justify-center text-white font-poppins rounded-[4px] font-normal text-xs leading-[18px] tracking-[0%] bg-[#DB4444] absolute left-3 top-3">
          -${item.discount}
        </div>
        <button
          onClick={() => dispatch(addToCart(item))}
          className="hidden group-hover:flex items-center justify-center absolute bottom-0 w-full h-10 border text-white bg-black"
        >
          {
            isInCart ? "Added" : "Add to Cart"
          }
        </button>
      </div>
      <div className="mt-4">
        <h2 className="font-medium text-base leading-6 tracking-[0%] font-poppins">
          {item.title}
        </h2>
        <div className="flex gap-3 mt-2">
          <p className="font-medium text-base leading-6 tracking-[0%] font-poppins text-[#DB4444]">
            ${item.price}
          </p>
          <s className="text-gray-400 font-medium text-base leading-6 tracking-[0%] font-poppins">
            ${item.prevPrice}
          </s>
        </div>
        <div className="flex gap-2 mt-2">
          <Rating />
          <p className="font-semibold text-sm leading-[21px] tracking-[0%] font-poppins text-gray-400">
            ({item.ratings})
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
