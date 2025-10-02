import React from 'react'
import { useSelector } from 'react-redux'
import { images } from '../services/bankImages'

const CheckOut = () => {

  const {cartStore} = useSelector(state => state.cartSlice)
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
       <div className='mt-20 flex gap-[176px]'>
        <div className='w-full'>
        <h1 className='font-medium text-4xl leading-[30px] tracking-[4%] font-poppins'>Billing Details</h1>
       <div className='max-w-[470px] flex flex-col gap-8 mt-12'>
         <div className='flex flex-col gap-2'>
          <label htmlFor="name" className='text-[#999999]'>First Names<span className='text-[#F1B4B4]'>*</span></label>
          <input className='bg-[#F5F5F5] border-none outline-none py-3 rounded px-3' type="text"  id='name'/>
        </div>
         <div className='flex flex-col gap-2'>
          <label htmlFor="name" className='text-[#999999]'>Company Name<span className='text-[#F1B4B4]'>*</span></label>
          <input className='bg-[#F5F5F5] border-none outline-none py-3 rounded px-3' type="text"  id='name'/>
        </div>
         <div className='flex flex-col gap-2'>
          <label htmlFor="name" className='text-[#999999]'>Street Address<span className='text-[#F1B4B4]'>*</span></label>
          <input className='bg-[#F5F5F5] border-none outline-none py-3 rounded px-3' type="text"  id='name'/>
        </div>
         <div className='flex flex-col gap-2'>
          <label htmlFor="name" className='text-[#999999]'>Apartment, floor, etc. (optional)</label>
          <input className='bg-[#F5F5F5] border-none outline-none py-3 rounded px-3' type="text"  id='name'/>
        </div>
         <div className='flex flex-col gap-2'>
          <label htmlFor="name" className='text-[#999999]'>Town/City<span className='text-[#F1B4B4]'>*</span></label>
          <input className='bg-[#F5F5F5] border-none outline-none py-3 rounded px-3' type="text"  id='name'/>
        </div>
         <div className='flex flex-col gap-2'>
          <label htmlFor="name" className='text-[#999999]'>Phone Number<span className='text-[#F1B4B4]'>*</span></label>
          <input className='bg-[#F5F5F5] border-none outline-none py-3 rounded px-3' type="text"  id='name'/>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="name" className='text-[#999999]'>Email Address<span className='text-[#F1B4B4]'>*</span></label>
          <input className='bg-[#F5F5F5] border-none outline-none py-3 rounded px-3' type="text"  id='name'/>
        </div>
        <div>
           <label class="checkbox__label">
                <input className="checkbox__input" type="checkbox"/>
                <div class="checkmark">
                  <span class="biling__icon">
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6L6.25 11L15 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  </span>
                </div>
               <p className='font-normal text-base leading-6 font-poppins'>
                 Save this information for faster check-out next time
               </p>
              </label>
        </div>
       </div>
       </div>
       <div className='w-full  mt-20 '>
          <div className='flex flex-col gap-6 pl-2'>
            {
            cartStore.map(item => (
              <div className='flex justify-between max-w-[425px] items-center'>
                <div className='flex items-center gap-3'>
                  <img src={item.img} className='w-[54px] h-[54px]' alt={item.title} />
                  <h1 className='font-normal text-base leading-6 font-poppins'>{item.title}</h1>
                </div>
                <p className='font-normal text-base leading-6 font-poppins'>${item.price}</p>
              </div>
            ))
          }
          </div>
          <div className='max-w-[425px] border-b border-b-[#999999]  flex items-center justify-between mt-8 pb-4'>
            <p className='font-normal text-base leading-6  font-poppins'>Subtotal:</p>
            <p className='font-normal text-base leading-6  font-poppins'>$1750</p>
          </div>
           <div className='max-w-[425px] border-b border-b-[#999999]  flex items-center justify-between mt-8 pb-4'>
            <p className='font-normal text-base leading-6  font-poppins'>Shipping:</p>
            <p className='font-normal text-base leading-6  font-poppins'>Free</p>
          </div>
           <div className='max-w-[425px]  flex items-center justify-between mt-8 pb-4'>
            <p className='font-normal text-base leading-6  font-poppins'>Total:</p>
            <p className='font-normal text-base leading-6  font-poppins'>$1750</p>
          </div>
          <div className='flex justify-between max-w-[425px]'>
            <div className=' mt-10 items-start'>
              <label class="bank-label">
                    <input className="radio-summary" type="radio" name="paymentMethod"/>
                    <div className="radio__summary-swap">
                      <div className="radio__circle"></div>
                    </div>
                      Bank
                  </label>
                   <label className="summary__cash-method">
                  <input className="radio-summary" type="radio" name="paymentMethod"/>
                    <div className="radio__summary-swap">
                      <div className="radio__circle"></div>
                    </div>
                     Cash on delivery
                </label>
            </div>
            <div className='flex  gap-1 items-center'>
              {
                images.map(item =>(
                  <img src={item.img} alt="Bank Images  " />
                ))
              }
            </div>
          </div>
            <div className='mt-8'>
              <div className='flex gap-4 items-center'>
              <input className='w-[300px] border-2 py-4 pl-6 rounded ' type="text" placeholder='Coupon Code' />
              <button className='bg-[#DB4444] rounded py-4 font-medium text-base leading-6 font-poppins  text-white w-[211px] px-12'>Apply Coupon</button>
            </div>
            <button className='w-[190px] mt-8 bg-[#DB4444] rounded py-4 text-white font-poppins font-medium text-base leading-6'>Place Order</button>
            </div>
       </div>
       </div>
    </div>
  )
}

export default CheckOut