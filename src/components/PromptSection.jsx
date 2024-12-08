import { useState, useEffect } from "react";

const dummyData = {
  history: [
    "History is the study of past events, particularly in human affairs.",
    "The ancient civilizations of Mesopotamia, Egypt, and the Indus Valley are among the earliest known human societies.",
    "The Industrial Revolution of the 18th and 19th centuries marked a major turning point in history, transforming societies worldwide.",
    "World War I and II reshaped the geopolitical landscape of the 20th century.",
    "The digital revolution has profoundly impacted communication, culture, and commerce globally.",
  ],
  royal: [
    "Saudi Arabia is a country in the Middle East known for its vast deserts and rich history.",
    "It was established in 1932 by King Abdulaziz Ibn Saud, uniting various tribal territories into one nation.",
    "The Kingdom is home to Islam's two holiest cities, Mecca and Medina, attracting millions of pilgrims annually.",
    "Saudi Arabia's economy heavily relies on oil, as it is one of the world's leading oil producers.",
    "Recent reforms under Vision 2030 aim to diversify the economy and modernize the nation.",
  ],
};

const PromptSection = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [lines, setLines] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingCompleted, setLoadingCompleted] = useState(false); // New state
  const [loadingMessages, setLoadingMessages] = useState([]);
  const [loadingIndex, setLoadingIndex] = useState(0);

  const loadingSteps = [
    "Searching internal repositories for your query...",
    "Scanning local documents, data repositories, and internal systems...",
    "Summarizing results...",
    "Cross-referencing sources...",
    "Compiling response...",
  ];

  useEffect(() => {
    if (loading && loadingIndex < loadingSteps.length) {
      const timeout = setTimeout(() => {
        setLoadingMessages((prev) => [...prev, loadingSteps[loadingIndex]]);
        setLoadingIndex((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    } else if (loadingIndex >= loadingSteps.length) {
      setLoading(false);
      setLoadingCompleted(true); // Mark loading as completed
    }
  }, [loading, loadingIndex]);

  useEffect(() => {
    if (loadingCompleted && lines.length > 0 && currentIndex < lines.length) {
      const timeout = setTimeout(() => {
        setOutput((prev) => `${prev}\n${lines[currentIndex]}`);
        setCurrentIndex((prev) => prev + 1);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [lines, currentIndex, loadingCompleted]);

  const handleInput = (e) => {
    if (e.key === "Enter" && input.trim()) {
      setOutput("");
      setLines(
        dummyData[input.toLowerCase()] || ["No data found for your query."]
      );
      setCurrentIndex(0);
      setLoading(true);
      setLoadingCompleted(false); // Reset loading completion
      setLoadingMessages([]);
      setLoadingIndex(0);
    }
  };

  return (
    <div className="w-full flex flex-row gap-10 mt-[100px] mx-auto">
      <div
        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        className="h-full flex flex-col min-h-96 bg-slate-500 gap-5 p-6 rounded shadow-lg"
      >
        <p className="text-white">Ask a new question</p>
        <p className="text-white">History</p>
        <p className="text-white">Data provenance</p>
      </div>
      <div className="w-full max-w-3xl mt-2 font-poppins">
        <div className="flex flex-col gap-5">
          <h3 className="text-white">How can I assist you today?</h3>
          <input
            type="text"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            placeholder="Enter Your Prompt"
            className={`px-4 py-2 border-2 text-lg outline-none transition-all text-white duration-300 ease-in-out ${
              isFocused ? "border-green-500" : "border-gray-300"
            }`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleInput}
          />
          <div className="relative">
            <div
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              className="px-4 min-h-40 py-4 border-2 text-lg outline-none transition-all duration-300 ease-in-out font-light hover:border-green-500"
            >
              <div>
                {loading && <h4 className="text-green-500">Loading...</h4>}
                {loadingMessages.map((message, index) => (
                  <p key={index} className="text-white animate-pulse">
                    {message}
                  </p>
                ))}
              </div>
              <div className="text-white">
                {output.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptSection;
