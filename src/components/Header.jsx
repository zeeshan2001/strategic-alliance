import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className=" text-[#ffffff] text-base font-semibold pb-7 mx-14 h-[50px]">
      <div className="mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <img style={{ width: "200px" }} src="/images/investoLogo.svg" />
        </h1>
        <div className="flex flex-col justify-end items-end">
          <div className="flex flex-row gap-10 ">
            <h3>
              <a href="#">MISA</a>
            </h3>
            <h3>
              <a href="#">Invest Saudi</a>
            </h3>
            <h3>
              <a href="#">About</a>
            </h3>
          </div>

          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
