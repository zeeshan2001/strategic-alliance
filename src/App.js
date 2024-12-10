import React, { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Chart from "./components/Chart";
import { categoriesData } from "./utils/commonData";
import Footer from "./components/Footer";
import CookieModal from "./components/CookieModal";
import PromptSection from "./components/PromptSection";
import DescriptionCard from "./components/DescriptionCard";
import { AppProvider } from "./AppContext";
import { Element } from "react-scroll";

function App() {
  return (
    <AppProvider>
      {/* Static Background */}

      {/* Scrollable Content */}
      <div className="relative h-screen overflow-y-auto">
        <div
          style={{
            background: "#343537",
            // "linear-gradient(rgb(0, 150, 178) 60%, rgb(6, 100, 203) 100%)",
          }}
        >
          <Header />
          <PromptSection />
        </div>

        <div className="px-8 flex flex-row items-center justify-between w-full shadow-lg bg-[#123235]">
          <div className="flex flex-col w-1/4 gap-8 font-poppins text-sm font-normal text-justify text-white hover:scale-110 transition-all duration-300  text-[15px]">
            {categoriesData.slice(0, 4).map((category) => {
              return (
                <div id={category?.id}>
                  <span
                    className="font-semibold "
                    style={{ color: category?.color }}
                  >
                    {category?.title}:
                  </span>{" "}
                  {category?.description}
                </div>
              );
            })}
          </div>
          <div className="w-1/2">
            <Chart />
          </div>
          <div className="flex flex-col w-1/4 gap-8 font-poppins text-sm font-normal text-justify text-white hover:scale-110 transition-all duration-300 text-[15px]">
            {categoriesData.slice(4, 8).map((category) => {
              return (
                <div id={category?.id}>
                  <span
                    className="font-semibold"
                    style={{ color: category?.color }}
                  >
                    {category?.title}:
                  </span>{" "}
                  {category?.description}
                </div>
              );
            })}
          </div>
        </div>
        <Element name="descriptionSection">
          <DescriptionCard />
        </Element>
        <Footer />
        <CookieModal />
      </div>
    </AppProvider>
  );
}

export default App;
