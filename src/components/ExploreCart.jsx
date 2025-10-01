import React, { useState } from "react";
import Rating from "./Rating";
import Eye from "./Eye";
import Heart from "./Heart";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../redux/slices/wishlistSlice";

const ExploreCart = ({ item }) => {

  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
    const dispatch = useDispatch()
  const {wishlistStore} = useSelector(state => state.wishlist)
  const cart = wishlistStore.some(card =>  card.id === item.id)
  return (
    <div className="group cursor-pointer">
      <div className="relative flex items-center justify-center  w-[270px] h-[250px] bg-[#F5F5F5]  rounded">
        <img src={item.img} alt={item.title} />
        {item.new && (
          <span className="absolute top-3 w-[51px] h-[26px] bg-[#00FF66] flex items-center rounded justify-center text-white font-poppins font-normal text-xs leading-[18px] tracking-[0%] left-3">
            New
          </span>
        )}
        <button className="hidden group-hover:flex items-center justify-center absolute bottom-0 w-full h-10 border text-white bg-black">
          Add to Cart
        </button>
        <Eye className={"absolute top-[54px] right-3 cursor-pointer"} />
                     <Heart strokeColor={cart ? "red" : "black"} currentColor={cart? "red" : "white"} className={`absolute text-white  top-3 right-3 cursor-pointer ${cart ? "text-red-500" : ""}`} onClick={() => dispatch(addToWishlist(item))}  />
      </div>
      <div>
        <h3 className="font-medium text-base leading-6 tracking-[0%] font-poppins mt-4">
          {item.title}
        </h3>
        <div className="flex items-center gap-3 mt-2">
          <p className="font-medium text-base leading-6 tracking-[0%] font-poppins text-[#DB4444]">
            ${item.price}
          </p>
          <Rating />
          <p className="font-semibold text-sm leading-[21px] tracking-[0%] font-poppins text-[#b3b3b3]">
            ({item.rating})
          </p>
        </div>
        {item.IsRadio && item.colors && (
          <div className="flex gap-3 mt-3">
            {item.colors.slice(0, 2).map((color, index) => (
              <label key={index} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name={`color-${item.id}`}
                  checked={selectedColorIdx === index}
                  onChange={() => setSelectedColorIdx(index)}
                  className="hidden"
                />
                {selectedColorIdx === index ? (
                  <span
                    className="flex items-center justify-center w-5 h-5 max-w-[20px] max-h-[20px] rounded-full border-2 border-black transition-all"
                    style={{ backgroundColor: "#fff" }}
                  >
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: color }}
                    ></span>
                  </span>
                ) : (
                  <span
                    className="w-5 h-5 max-w-[20px] max-h-[20px] rounded-full transition-all"
                    style={{ backgroundColor: color }}
                  ></span>
                )}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreCart;
