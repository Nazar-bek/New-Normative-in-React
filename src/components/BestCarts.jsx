import React from "react";
import Eye from "./Eye";
import Heart from "./Heart";
import Rating from "./Rating";

const BestCarts = ({ item }) => {
  return (
    <div className="group">
      <div className="relative flex items-center justify-center  w-[270px] h-[250px] bg-[#F5F5F5]  rounded">
        <img src={item.img} alt={item.title} />
        <Eye className={"absolute top-[54px] right-3 cursor-pointer"} />
        <Heart className={"absolute top-3 right-3 cursor-pointer"} />
        <button className="hidden group-hover:flex items-center justify-center absolute bottom-0 w-full h-10 border text-white bg-black">
          Add to Cart
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
          {item.prevPrice ? (
            <s className="text-gray-400 font-medium text-base leading-6 tracking-[0%] font-poppins">
              ${item.prevPrice}
            </s>
          ) : (
            ""
          )}
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

export default BestCarts;
