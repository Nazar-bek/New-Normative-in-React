import React from "react";

const ServicesCart = ({ item }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <item.icon />

      <h2 className="font-semibold text-xl leading-7 tracking-[0%] font-poppins mt-4">
        {item.title}
      </h2>
      <p className="font-normal text-sm leading-[21px] tracking-[0%] text-center font-poppins">
        {item.desc}
      </p>
    </div>
  );
};

export default ServicesCart;
