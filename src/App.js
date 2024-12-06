import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router"; // Use BrowserRouter
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactUs from "./components/pages/ContactUs";
import Header from "./components/Header";
import Chart from "./components/Chart";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<ContactUs />} />
//       </Routes>
//     </Router>
//   );
// }

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
      <div className="relative h-screen overflow-y-auto p-8 text-white">
        <Header />

        <Chart />
      </div>
    </>
  );
}

export default App;
