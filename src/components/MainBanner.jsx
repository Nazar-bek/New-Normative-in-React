import React from 'react'

const MainBanner = ({title, subtitle, isButton = false, onclickNext, onclickPrev, Btn = false}) => {
  return (
      <div className="containeer mx-auto mt-[120px]">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 rounded-[4px] bg-[#DB4444]"></div>
          <p className="font-semibold text-base leading-5 tracking-[0%] font-poppins text-[#DB4444]">
            {subtitle}
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-[87px]">
            <h2 className="font-semibold text-4xl leading-[48px] tracking-[4%] mt-3 font-inter">
              {title}
            </h2>
          </div>
          {isButton ? (
             <div className="flex items-center gap-2">
            <button onClick={onclickPrev} className="flex items-center justify-center w-[46px] h-[46px] bg-[#F5F5F5] rounded-full">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1L1 8L8 15M1 8H17"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div className="flex items-center justify-center w-[46px] h-[46px] bg-[#F5F5F5] rounded-full">
              <button onClick={onclickNext} className="flex items-center justify-center w-[46px] h-[46px] bg-[#F5F5F5] rounded-full">
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 8H18M18 8L11 1M18 8L11 15"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          ) : ""}
          {
            Btn ? (
              <button className='bg-[#DB4444] py-4 px-12 rounded text-white '>
            View All
          </button>
            ): ""
          }
        </div>
        
      </div>
  )
}

export default MainBanner