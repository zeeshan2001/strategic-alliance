import React from "react";
import { menuData } from "../utils/commonData";
// import { Link } from "react-router-dom"; // Use `next/link` if using Next.js
// Adjust path if needed
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "../components/ui/navigation-menu"; // Adjust path if needed
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className=" text-white font-normal text-base py-7 mx-14 h-[90px]">
      <div className="mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <img src="/images/logo.svg" />
        </h1>
        <div className="flex flex-col justify-end gap-8 items-end">
          <div className="flex flex-row gap-10 ">
            <h3>Misa</h3>
            <h3>Invest Saudi</h3>
            <h3>About</h3>
          </div>

          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
