import React from "react";
// import { Link } from "react-router-dom"; // Use `next/link` if using Next.js

const Header = () => {
  return (
    <header className=" text-white font-normal text-base py-7 mx-14 h-[90px]">
      <div className="mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <img src="/images/logo.svg" />
        </h1>
        <div className="flex flex-col justify-end gap-2 items-end">
          <div className="flex flex-row gap-10 ">
            <h3>Analystic</h3>
            <h3>Docs</h3>
            <h3>Governances</h3>
          </div>
          <div className="flex flex-row gap-10 items-end">
            <h3>Home</h3>
            <h3>Policy Dimension</h3>
            <h3>Countries</h3>
            <h3>Themes</h3>
            <h3>Data Kitchen</h3>
            <h3>Toolkit Notes</h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
