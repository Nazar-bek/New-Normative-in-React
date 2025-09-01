import React, { useEffect } from "react";
import Up from "../assets/svgs/Up";

const UpButton = () => {
  const [visable, setVisible] = React.useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 600) {
        setVisible(true);
      }else{
        setVisible(false);
      }
    };


    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
    console.log("render");
    
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
        {
        visable && (
                <button
        onClick={scrollToTop}
        className="w-[46px] h-[46px] rounded-full bg-[#F5F5F5] transition duration-700 fixed bottom-10 right-10 flex justify-center items-center shadow-md"
        >
        <Up />
        </button>
        )
    }
    </div>
  );
};

export default UpButton;
