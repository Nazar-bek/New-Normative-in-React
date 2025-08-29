import React from 'react'

const CategoryCard = ({category, className}) => {
  return (
    <div className='group cursor-pointer'>
      <div className={`${className} group-hover:bg-[#DB4444] group-hover:border-none w-[170px] h-[145px] border flex flex-col gap-4 py-6 items-center rounded border-[#B3B3B3] text-black group-hover:text-white`}>
        <category.img />
        <p className='font-normal text-base leading-6 tracking-[0%] font-poppins'>
          {category.title}
        </p>
      </div>
    </div>
  )
}

export default CategoryCard
