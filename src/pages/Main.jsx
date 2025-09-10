import React, { useRef, useState } from "react";
import Slider from "../components/Slider";
import CountTimer from "../components/CountTimer";
import Card from "../components/Card";
import { cards } from "../services/cartsData";
import MainBanner from "../components/MainBanner";
import Gaming from "../assets/svgs/Gaming";
import { categories } from "../services/categories";
import CategoryCard from "../components/CategoryCard";
import BestCarts from "../components/BestCarts";
import { bestCarts } from "../services/bestCarts";
import BannerJbl from "../components/BannerJbl";
import ExploreCart from "../components/ExploreCart";
import { explore } from "../services/explore";
import FeatureCart from "../components/FeatureCart";
import { feature } from "../services/feature";
import Aside from "../components/Aside";
import { deliveryData } from "../services/deliveries";
import ServicesCart from "../components/ServicesCart";

const Main = () => {
  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);

  const categoryNext = () => {
    setActive((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };
  const categoryPrev = () => {
    setActive((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="border-t mt-5 border-t-[#B3B3B3]">
      <div className="containeer  flex mx-auto">
        <Aside />
        <div className="pt-10 pl-10">
          <Slider />
        </div>
      </div>
      <div className="containeer mx-auto mt-[120px]">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 rounded-[4px] bg-[#DB4444]"></div>
          <p className="font-semibold text-base leading-5 tracking-[0%] font-poppins text-[#DB4444]">
            Today’s
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-[87px]">
            <h2 className="font-semibold text-4xl leading-[48px] tracking-[4%] font-inter">
              Flash Sales
            </h2>
            <div className="flex flex-col">
              <div className="flex items-center "></div>
              <CountTimer />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center w-[46px] h-[46px] bg-[#F5F5F5] rounded-full"
            >
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
            <button className="flex items-center justify-center w-[46px] h-[46px] bg-[#F5F5F5] rounded-full">
              <button
                onClick={handleNext}
                className="flex items-center justify-center w-[46px] h-[46px] bg-[#F5F5F5] rounded-full"
              >
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
            </button>
          </div>
        </div>
      </div>
      <div className=" mx-auto product_container">
        <div
          ref={scrollRef}
          className="flex   overflow-auto gap-[30px] mt-15 hide-scrollbar ml-[160px]"
        >
          {cards.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div>
        <MainBanner
          subtitle="Categories"
          onclickNext={categoryNext}
          onclickPrev={categoryPrev}
          title="Browse By Category"
          isButton={true}
        />
      </div>
      <div
        id="category-wrapper"
        className="containeer  mx-auto flex gap-[30px] mt-15"
      >
        {categories.map((item, idx) => (
          <CategoryCard
            key={idx}
            className={
              idx === active
                ? "bg-[#db4444] text-white"
                : "border-[#b3b3b3] hover:bg-[#db4444] hover:border-[#db4444] hover:text-white"
            }
            category={item}
          />
        ))}
      </div>
      <MainBanner
        subtitle="This Month"
        title="Best Selling Products"
        Btn={true}
      />
      <div className="containeer  mx-auto flex gap-[30px] mt-15">
        {bestCarts.map((item) => (
          <BestCarts item={item} />
        ))}
      </div>
      <div className="containeer  mx-auto">
        <BannerJbl />
      </div>
      <MainBanner
        subtitle="Our Products"
        title="Explore Our Products"
        isButton={true}
      />
      <div className="flex flex-wrap containeer mx-auto gap-[30px] mt-15">
        {explore.map((item) => (
          <ExploreCart item={item} />
        ))}
      </div>
      <MainBanner subtitle="Featured" title="New Arrival" />
      <div className="new__arrival-grid containeer  mx-auto">
        {feature.map((item) => (
          <FeatureCart item={item} key={item.id} />
        ))}
      </div>
      <div className="containeer  mx-auto flex justify-center mt-35 gap-22">
        {deliveryData.map((item) => (
          <ServicesCart item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Main;
