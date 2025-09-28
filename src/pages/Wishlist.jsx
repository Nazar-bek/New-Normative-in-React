import React from "react";
import { useSelector } from "react-redux";
import WishlistCard from "../components/WishlistCard";
import { relatedStaff } from "../services/relatedItems";

const Wishlist = () => {
  const { wishlistStore } = useSelector((state) => state.wishlist);
  console.log(wishlistStore);

  return (
    <main>
      <section className="container mx-auto max-w-[1170px]">
        <div className="flex items-center justify-between mt-20">
          <p className="font-normal text-xl leading-[26px] font-poppins">Wishlist ({wishlistStore.length})</p>
          <button className="border rounded py-4 px-12 border-[#7F7F7F]">Move All To Bag</button>
        </div>
        <div className="grid grid-cols-4 gap-[30px]">
          {wishlistStore.map((item) => (
            <WishlistCard key={item.id} item={item}/>
          ))}
        </div>
        {wishlistStore.length < 0 || !wishlistStore.length && (
            <div className="flex items-center mt-10 pb-10 justify-center ">
                <h1>The wishlist is empty</h1>
            </div>
          )}
          <div className="flex items-center justify-between mt-20">
            <div className="flex gap-2 items-center">
            <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
            <p className="font-normal text-xl leading-[26px] font-poppins">Just For You</p>
            </div>
            <div>
          <button className="border rounded py-4 px-12 border-[#7F7F7F]">See All</button>
            </div>  
          </div>

          <div className="grid grid-cols-4 gap-10" >
            {
                relatedStaff.map(item => (
                    <WishlistCard key={item.id} rating={true} eye={true} item={item}/>
                ))
            }
          </div>
      </section>
    </main>
  );
};

export default Wishlist;
