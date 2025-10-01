import React from 'react'

const CheckOut = () => {
  return (
    <div className='conatiner max-w-[1170px] mx-auto'>
       <div>
        <ul className='flex gap-2 items-center mt-20'>
            <li className='text-[#7F7F7F] font-normal text-sm leading-[21px] font-poppins cursor-pointer'>Account</li>
            <li className='text-[#7F7F7F] font-normal text-sm leading-[21px] font-poppins cursor-pointer'>/</li>
            <li className='text-[#7F7F7F] font-normal text-sm leading-[21px] font-poppins cursor-pointer'>My Account</li>
            <li className='text-[#7F7F7F] font-normal text-sm leading-[21px] font-poppins cursor-pointer'>/</li>
            <li className='text-[#7F7F7F] font-normal text-sm leading-[21px] font-poppins cursor-pointer'>Product</li>
            <li className='text-[#7F7F7F] font-normal text-sm leading-[21px] font-poppins cursor-pointer'>/</li>
            <li className='text-[#7F7F7F] font-normal text-sm leading-[21px] font-poppins cursor-pointer'>View Cart</li>
            <li className='text-[#7F7F7F] font-normal text-sm leading-[21px] font-poppins cursor-pointer'>/</li>
            <li className='font-normal text-sm leading-[21px] font-poppins cursor-pointer'>CheckOut</li>
        </ul>
       </div>
    </div>
  )
}

export default CheckOut