import React from "react";

const FeatureCart = ({ item }) => {
  return (
    <div className={item.className}>
      <div className="arrival__info ">
        <h3  className="new__title font-semibold text-2xl leading-6 tracking-[3%] font-inter">{item.title}</h3>
        <p className="new__arrival-description w-58 font-normal text-sm leading-[21px] mt-3 tracking-[0%] font-poppins">{item.desc}</p>
        <a href="#" className="arrival__btn mt-4 block w-20">{item.btn}</a>
      </div>
    </div>
  );
};

export default FeatureCart;

