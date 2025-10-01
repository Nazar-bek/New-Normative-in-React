import React from "react";
import PlusArrow from "../assets/PlusArrow";
import MinusArrow from "../assets/MinusArrow";
import DeleteCart from "../assets/DeleteCart";
import { useDispatch } from "react-redux";
import { decrement, deleteCart, increment } from "../redux/slices/cartSlice";

const Cartcard = ({item}) => {

    const dispatch = useDispatch()
  return (
    <div className="flex items-center justify-between pl-10 pr-[66px] py-4 shadow-md rounded">
      <div className="flex items-center gap-3 relative">
        <div className="relative">
        <img className="w-[54px] max-h-[54px]" src={item.img} alt="Image" />
            <div onClick={() => dispatch(deleteCart(item))} className="absolute -top-1 -left-1.5">
                <DeleteCart/>
            </div>
        </div>
        <p className="gg font-normal text-base leading-6 font-poppins">{item.title}</p>
      </div>
      <p className="-ml-30 font-normal text-base leading-6 font-poppins">${item.price}</p>
      <div className="w-[72px] h-[44px] border-2 rounded flex items-center py-[6px] px-3 justify-between">
        <p className="font-normal text-base leading-6 font-poppins">{item.quantity}</p>
        <div>
          <PlusArrow onClick={() =>dispatch(increment(item.id))}/>
          <MinusArrow onClick={() => dispatch(decrement(item.id))}/>
        </div>
      </div>
      <p className="font-normal text-base leading-6 font-poppins ggg">${item.totalPrice}</p>
    </div>
  );
};

export default Cartcard;
