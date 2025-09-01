import React from 'react'

const Aside = () => {
  return (
   <div className="w-[20%] border-r border-r-[#B3B3B3]  pr-4">
          <ul className="flex flex-col gap-4 pt-10">
            <li className="flex items-center justify-between font-normal text-base leading-6 tracking-[0%] text-center font-poppins cursor-pointer">
              Woman’s Fashion
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z"
                  fill="black"
                />
              </svg>
            </li>
            <li className="flex items-center justify-between font-normal text-base leading-6 tracking-[0%] text-center font-poppins cursor-pointer">
              Men’s Fashion
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z"
                  fill="black"
                />
              </svg>
            </li>
            <li className="flex items-center justify-between font-normal text-base leading-6 tracking-[0%] text-center font-poppins cursor-pointer">
              Electronics
            </li>
            <li className="flex items-center justify-between font-normal text-base leading-6 tracking-[0%] text-center font-poppins cursor-pointer">
              Home & Lifestyle
            </li>
            <li className="flex items-center justify-between font-normal text-base leading-6 tracking-[0%] text-center font-poppins cursor-pointer">
              Medicine
            </li>
            <li className="flex items-center justify-between font-normal text-base leading-6 tracking-[0%] text-center font-poppins cursor-pointer">
              Sports & Outdoor
            </li>
            <li className="flex items-center justify-between font-normal text-base leading-6 tracking-[0%] text-center font-poppins cursor-pointer">
              Baby’s & Toys
            </li>
            <li className="flex items-center justify-between font-normal text-base leading-6 tracking-[0%] text-center font-poppins cursor-pointer">
              Groceries & Pets
            </li>
            <li className="flex items-center justify-between font-normal text-base leading-6 tracking-[0%] text-center font-poppins cursor-pointer">
              Health & Beauty
            </li>
          </ul>
        </div>
  )
}

export default Aside