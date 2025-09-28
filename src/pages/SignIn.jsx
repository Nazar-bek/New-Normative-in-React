import React from 'react'
import image from "../assets/SignIn.img.png"
import Google from '../assets/svgs/Google'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='mt-15'>
        <div className='sign_container flex gap-[129px] items-center '>
            <div>
                <img src={image} alt="IMage of Form" />
            </div>
            <div className='w-[370px]'>
               <div className='flex flex-col gap-6'>
                 <h1 className='font-medium text-4xl leading-[30px] tracking-[4%] font-inter'>Create an account</h1>
                    <p className='font-normal text-base leading-6  font-poppins'>Enter your details below</p>
               </div>
                <form className='flex flex-col gap-5 mt-4'>
                    <input className='font-normal text-base leading-6 font-poppins border-b w-full outline-none py-2' type="text" placeholder='Name'/>
                     <input className=' border-b w-full outline-none py-2 font-normal text-base leading-6 font-poppins' type="text" placeholder='Email or Phone Number'/>
                      <input className=' border-b w-full outline-none py-2 font-normal text-base leading-6 font-poppins' type="password" placeholder='Password'/>
                      <button className='w-full py-4 border rounded text-white bg-[#DB4444] font-medium text-base leading-6 font-poppins'>Create Account</button>
                      <button className='w-full py-4 border border-[#999999] rounded flex justify-center gap-4'>
                        <Google/>
                        <span className=' font-normal text-base leading-6 font-poppins'>
                            Sign up with Google
                        </span>
                         </button>
                </form>
                <div className='flex items-center gap-4 justify-center mt-4'>
                    <p className='font-normal text-base leading-6 font-poppins text-[#4D4D4D]'>
                        Already have account?
                    </p>
                    <Link to="/login" className='pb-[2px] text-[#4D4D4D] border-b-[#4D4D4D] border-b font-medium text-base leading-6 font-poppins' >Log in</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn;