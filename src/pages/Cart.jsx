import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img3 from "../assets/feature3.png"
import PlusArrow from "../assets/PlusArrow";
import MinusArrow from "../assets/MinusArrow";
import { useSelector } from "react-redux";
import Cartcard from "../components/Cartcard";
import { toast } from "sonner";
const Cart = () => {

  const {cartStore,totalPrice} = useSelector(state => state.cartSlice)
  console.log(cartStore);
  console.log(totalPrice);
  const navigate = useNavigate()
  const handleRouting = () => {
    if(cartStore.length === 0 || !cartStore){
      toast.error("You have not added anything")
    }else{
      navigate("/checkout")
    }
  }
  
  return (
    <div className="conatiner max-w-[1170px] mx-auto">
      <div>
        <ul className="flex gap-3 mt-20">
          <li>
            <Link to={"/"} className="text-[#7F7F7F] cursor-pointer">
              Home
            </Link>
          </li>
          <li className="text-[#7F7F7F] cursor-pointer">/</li>
          <li className="cursor-pointer">Cart</li>
        </ul>
      </div>
      <div className="flex flex-col gap-10">
        <div className="py-6 px-10 shadow-md rounded mt-20">
          <ul className="flex items-center justify-between">
            <li className="font-normal text-base leading-6 font-poppins">
              Product
            </li>
            <li className="font-normal text-base leading-6 font-poppins">
              Price
            </li>
            <li className="font-normal text-base leading-6 font-poppins">
              Quantity
            </li>
            <li className="font-normal text-base leading-6 font-poppins">
              Subtotal
            </li>
          </ul>
        </div>
        {
          cartStore.map(item => (
            <Cartcard key={item.id} item={item}/>
          ))
        }
        {
          cartStore.length === 0 ? <div className="flex items-center justify-center h-40"><p>Your cart is empty</p></div> :""
        }
      </div>
      <div className="flex items-center justify-between mt-6">
        <button className="border rounded py-4 px-12 border-[#7F7F7F]">
          Return To Shop
        </button>
        <button className="border rounded py-4 px-12 border-[#7F7F7F]">Update Cart</button>
      </div>
      <div className="mt-20 flex items-start justify-between">
        <div className="flex gap-4">
          <input className="py-4 border rounded px-6 pr-8" type="text" placeholder="Coupon Code" />
          <button className="px-12 py-4 bg-[#DB4444] rounded text-white font-medium text-base leading-6 font-poppins">Apply Coupon</button>
        </div>
        <div className="w-[470px] rounded border-[2px] h-[327px] py-8 px-6">
          <h2 className="font-medium text-xl leading-7 font-poppins">
            Cart Total
          </h2>
          <div className="flex justify-between py-4 border-b border-b-[#999999] ">
            <p className="font-normal text-base leading-6  font-poppins">
              Subtotal:
            </p>
            <p className="font-normal text-base leading-6  font-poppins">
              ${totalPrice}
            </p>
          </div>
          <div className="flex justify-between py-4 border-b border-b-[#999999] ">
            <p className="font-normal text-base leading-6  font-poppins">
              Shipping:
            </p>
            <p className="font-normal text-base leading-6  font-poppins">
              Free
            </p>
          </div>
           <div className="flex justify-between py-4">
            <p className="font-normal text-base leading-6  font-poppins">
             Total:
            </p>
            <p className="font-normal text-base leading-6  font-poppins">
              ${totalPrice}
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button onClick={() => handleRouting()} className="py-4 px-12 bg-[#DB4444]  text-white rounded font-medium text-base leading-6 font-poppins">
            Procees to checkout
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
