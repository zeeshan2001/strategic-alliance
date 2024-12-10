import React from "react";
import Navigation from "./Navigation";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 text-[#ffffff] text-base font-semibold h-[170px]"
      style={{ backgroundColor: "#1e1e20" }}
    >
      <div className="mx-auto flex justify-between items-center px-14 h-full">
        <div className="flex-shrink">
          <h1 className="text-2xl font-bold">
            <img
              style={{ width: "215px" }}
              src="/images/investoLogo.svg"
              alt="Investo Logo"
            />
          </h1>
        </div>
        <div className="flex flex-col justify-end w-full self-start gap-y-[2rem] mt-[30px]">
          <div className="flex justify-end gap-10">
            <h3>
              <a href="#">MISA</a>
            </h3>
            <h3>
              <a href="#">Invest Saudi</a>
            </h3>
            <h3>
              <a href="#">About</a>
            </h3>
            <h3>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-2 text-white font-poppins">
                  <span>Language</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40 bg-[#4d4e50] font-poppins">
                  <DropdownMenuItem>English</DropdownMenuItem>
                  <DropdownMenuItem>العربية</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </h3>
          </div>
          <div className="flex justify-start gap-10">
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
