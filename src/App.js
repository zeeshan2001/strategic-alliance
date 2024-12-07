import "./App.css";
import Header from "./components/Header";
import Chart from "./components/Chart";
import { categoriesData } from "./utils/commonData";
import Footer from "./components/Footer"
import CookieModal from "./components/CookieModal";
import PromptSection from "./components/PromptSection";

function App() {
  return (
    <>
      {/* Static Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#306771] to-[#143035] -z-10">
        {/* Glow Spots */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#007444] blur-[100px]"></div>
        <div className="absolute bottom-[-5%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#007444] blur-[100px]"></div>
        {/* <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purple-500/70 blur-[100px]"></div> */}
      </div>

      {/* Scrollable Content */}
      <div className="relative h-screen overflow-y-auto p-8 ">
        <Header />
        <PromptSection/>
        <div className="flex flex-row items-center justify-between w-full ">
          <div className="flex flex-col w-1/4 items-stretch gap-8 font-poppins text-sm font-normal text-justify text-white hover:scale-110 transition-all duration-300">
            {categoriesData.slice(0, 4).map((category) => {
              return <div id={category?.id}><span className="font-semibold " style={{color: category?.color}}>{category?.title}:</span> {category?.description}</div>;
            })}
          </div>
          <div className="w-1/2">
          <Chart />
          </div>
          <div className="flex flex-col w-1/4 gap-8 font-poppins text-sm font-normal text-justify text-white hover:scale-110 transition-all duration-300">
            {categoriesData.slice(4,8).map((category) => {
              return <div id={category?.id}><span className="font-semibold" style={{color: category?.color}}>{category?.title}:</span> {category?.description}</div>;
            })}
          </div>
        </div>

        <Footer/>
        <CookieModal/>
      </div>
    </>
  );
}

export default App;
