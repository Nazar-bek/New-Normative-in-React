import React from 'react'

const Banner = () => {
  return (
     <div className=" bg-black">
      <div className="flex justify-between containeer mx-auto text-white">
        <div className="flex items-center py-4 ml-[310px] gap-2">
          <p className="text-sm leading-[21px] font-poppins">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a className="underline font-poppins decoration-solid font-semibold text-sm leading-6 tracking-[0%] text-center" href="#">ShopNow</a>
        </div>
        <select className="font-poppins cursor-pointer  bg-black text-white border-none outline-none">
            <option className="cursor-pointer" value="uz">Uzbek</option>
            <option className="cursor-pointer" value="ru">Russian</option>
            <option className="cursor-pointer" value="en">English</option>
        </select>
      </div>
    </div>
  )
}

export default Banner