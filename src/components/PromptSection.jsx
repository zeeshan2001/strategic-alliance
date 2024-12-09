import { useState, useEffect } from "react";

const historyData = [
  <h2 className="font-bold text-xl mb-3">Response</h2>,
  <div className="my-2">
    <p className="font-light">
      The Saudi National Investment Strategy (NIS) is a key initiative aimed at
      improving the investment climate in Saudi Arabia in line with Vision 2030.
    </p>
  </div>,
  <div className="my-2">
    <strong>Core Objectives:</strong>
  </div>,
  <div className="my-2">
    <strong>- Economic Diversification:</strong>
    <p className="font-light">
      The NIS seeks to reduce oil dependency by promoting sectors like green
      energy, technology, healthcare, and logistics.
    </p>
  </div>,
  <div className="my-2">
    <strong>- Investment Growth:</strong>
    <p className="font-light">
      The strategy aims to triple investment levels from 2019 by 2030 and
      significantly boost foreign direct investment (FDI).
    </p>
  </div>,
  <div className="my-2">
    <strong>- Private Sector Empowerment:</strong>
    <p className="font-light">
      It targets increasing the private sector's GDP contribution from 22% in
      2019 to 30% by 2030.
    </p>
  </div>,
  <div className="my-2">
    <strong>Strategic Initiatives:</strong>
  </div>,
  <div className="my-2">
    <strong>- Sectoral Focus:</strong>
    <p className="font-light">
      The NIS prioritizes renewable energy, digital infrastructure, tourism,
      healthcare, and logistics.
    </p>
  </div>,
  <div className="my-2">
    <strong>- Infrastructure Development:</strong>
    <p className="font-light">
      Major projects like the NEOM mega-city are planned to attract investments
      and create jobs.
    </p>
  </div>,
  <div className="my-2">
    <strong>- Regulatory Environment:</strong>
    <p className="font-light">
      Establishing special economic zones with favorable regulations aims to
      enhance business operations and attract more investments.
    </p>
  </div>,
];

const citationData = [
  <img src="/images/citation.png" alt="Citation" />,
  <h3 className="text-white text-lg font-bold p-3 mt-5 bg-[#ffffff1a]">Related</h3>,
  <p className="text-white border-t border-gray-300 border-solid cursor-pointer p-3 bg-[#ffffff1a]">
    How will the National Investment Strategy impact Saudi Arabia's economy by
    2030
  </p>,
  <p className="text-white border-t border-gray-300 border-solid cursor-pointer p-3 bg-[#ffffff1a]">
    What are the main sectors targeted by the National Investment Strategy
  </p>,
  <p className="text-white border-t border-gray-300 border-solid cursor-pointer p-3 bg-[#ffffff1a]">
    How does the National Investment Strategy align with Vision 2030
  </p>,
  <p className="text-white border-t border-gray-300 border-solid cursor-pointer p-3 bg-[#ffffff1a]">
    What measures are being taken to attract foreign direct investment
  </p>,
  <p className="text-white border-t border-gray-300 border-solid cursor-pointer p-3 bg-[#ffffff1a]">
    How will the strategy enhance innovation and local content development
  </p>,
];

const PromptSection = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingCompleted, setLoadingCompleted] = useState(false);
  const [loadingMessages, setLoadingMessages] = useState([]);
  const [loadingIndex, setLoadingIndex] = useState(0);
  const [citationIndex, setCitationIndex] = useState(0);
  const [loadingHistory, setLoadingHistory] = useState(true);
  const [citationOutput, setCitationOutput] = useState([]);

  const loadingSteps = [
    <h2 className="font-bold text-xl mb-4 mt-[10px]">Search</h2>,
    <div>
      <strong>
        Searching internal repositories for: Information about MISA in Saudi
        Arabia
      </strong>
    </div>,
    <div className="font-light italic mb-5 text-[12px]">
      Scanning local documents, data repositories, and internal systems...
    </div>,
    <div className="mt-3">
      <div>
        <strong>Summarizing NATIONAL INVESTMENT STRATEGY</strong>
      </div>
      <div className="font-light italic mb-5 text-[12px]">
        Collecting insights from internal knowledge bases and relevant files...
      </div>
    </div>,
    <div className="mt-3">
      <div>
        <strong>Status Messages</strong>
      </div>
      <div className="mt-2">
        <strong>Status Messages</strong>
      </div>
      <ul className="font-light italic list-disc ml-3 mb-5 text-[12px]">
        <li>Currently processing..</li>
        <li>Scanning results...</li>
        <li>Cross-referencing sources...</li>
      </ul>
    </div>,
  ];

  useEffect(() => {
    if (loading && loadingIndex < loadingSteps.length) {
      const timeout = setTimeout(() => {
        setLoadingMessages((prev) => [...prev, loadingSteps[loadingIndex]]);
        setLoadingIndex((prev) => prev + 1);
      }, 300);
      return () => clearTimeout(timeout);
    } else if (loadingIndex >= loadingSteps.length) {
      setLoading(false);
      setLoadingCompleted(true);
    }
  }, [loading, loadingIndex]);

  useEffect(() => {
    if (!loading && loadingCompleted && currentIndex < historyData.length) {
      const timeout = setTimeout(() => {
        setOutput((prev) => [...prev, historyData[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, 300);
      return () => clearTimeout(timeout);
    } else if (currentIndex >= historyData.length) {
      setLoadingHistory(false);
    }
  }, [currentIndex, loadingCompleted, loadingHistory]);

  useEffect(() => {
    if (!loading && !loadingHistory && citationIndex < citationData.length) {
      const timeout = setTimeout(() => {
        setCitationOutput((prev) => [...prev, citationData[citationIndex]]);
        setCitationIndex((prev) => prev + 1);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [citationIndex, loadingHistory]);

  const handleInput = (e) => {
    if (e.key === "Enter" && input.trim()) {
      setOutput([]);
      setCurrentIndex(0);
      setLoading(true);
      setLoadingCompleted(false);
      setLoadingHistory(true);
      setLoadingMessages([]);
      setCitationOutput([]);
      setLoadingIndex(0);
      setCitationIndex(0);
    }
  };

  return (
    <div className="w-full flex flex-row gap-4 mt-[150px] pt-[50px] pb-20 px-10 mx-auto">
      <div
        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        className="h-1/5 flex flex-col min-h-96 bg-slate-500 gap-5 p-6 rounded shadow-lg"
      >
        <p className="text-white cursor-pointer underline hover:no-underline">Ask a new question</p>
        <p className="text-white cursor-pointer underline hover:no-underline">History</p>
        <p className="text-white cursor-pointer underline hover:no-underline">Data provenance</p>

      </div>
      <div className="w-2/5 max-w-3xl font-poppins">
        <div className="flex flex-col gap-5">
          <h3 className="text-white text-lg font-bold">
            How can I assist you today?
          </h3>
          <input
            type="text"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            placeholder="Enter Your Prompt"
            className={`px-4 py-2 border-2 text-lg outline-none transition-all placeholder:text-gray-200 text-white duration-300 ease-in-out ${
              isFocused ? "border-green-500" : "border-gray-300"
            }`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleInput}
          />
          <div className="relative">
            <div
              className={`outline-none transition-all duration-300 ease-in-out hover:border-green-500`}
            >
              <div
              className={` ${loading || loadingCompleted ? 'p-4' : ''}`}
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                {loading && <h4 className="text-green-500">Loading...</h4>}
                {loadingMessages.map((message, index) => (
                  <p
                    key={index}
                    className={`text-white ${
                      !loadingCompleted ? "animate-pulse" : ""
                    }`}
                  >
                    {message}
                  </p>
                ))}
              </div>
              <div className={`text-white mt-5 ${!loading && loadingCompleted ? 'p-4' : ''}`}
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                {output.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/5 max-w-3xl font-poppins">
        <h3 className="text-white text-lg font-bold mb-5">Citation</h3>
        <div>
          {citationOutput.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromptSection;
