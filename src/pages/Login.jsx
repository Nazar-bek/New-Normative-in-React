import React from 'react'
import image from "../assets/SignIn.img.png"
import Google from '../assets/svgs/Google'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='mt-15'>
        <div className='sign_container flex gap-[129px] items-center '>
            <div>
                <img src={image} alt="IMage of Form" />
            </div>
            <div className='w-[370px]'>
               <div className='flex flex-col gap-6'>
                 <h1 className='font-medium text-4xl leading-[30px] tracking-[4%] font-inter'>Log in to Exclusive</h1>
                    <p className='font-normal text-base leading-6 font-poppins'>Enter your details below</p>
               </div>
                <form className='flex flex-col gap-5 mt-8'>
                    <input className='font-normal text-base leading-6 font-poppins border-b w-full outline-none py-2' type="text" placeholder='Email or Phone Number'/>
                     <input className=' border-b w-full outline-none py-2 font-normal text-base leading-6 font-poppins' type="text" placeholder='Password'/>
                     
                </form>
                <div className='flex items-center justify-between mt-[56px]'>
                   <button className="py-4 px-12 border bg-[#DB4444] text-white rounded font-medium text-base leading-6 font-poppins">Log In</button>
                   <a className='text-[#DB4444] font-normal text-base leading-6 font-poppins' href="#">Forget Password?</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login