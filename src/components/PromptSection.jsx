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
    "Recent reforms under Vision 2030 aim to diversify the economy and modernize the nation.",
    "Recent reforms under Vision 2030 aim to diversify the economy and modernize the nation.",
    "Recent reforms under Vision 2030 aim to diversify the economy and modernize the nation.",
    "Recent reforms under Vision 2030 aim to diversify the economy and modernize the nation.",
    "Recent reforms under Vision 2030 aim to diversify the economy and modernize the nation.",
    "Recent reforms under Vision 2030 aim to diversify the economy and modernize the nation.",
    "Recent reforms under Vision 2030 aim to diversify the economy and modernize the nation.",
    "Recent reforms under Vision 2030 aim to diversify the economy and modernize the nation.",
    "Recent reforms under Vision 2030 aim to diversify the economy and modernize the nation.",
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

  useEffect(() => {
    if (lines.length > 0 && currentIndex < lines.length) {
      const timeout = setTimeout(() => {
        setOutput((prev) => `${prev}\n${lines[currentIndex]}`);
        setLoading(false);
        setCurrentIndex((prev) => prev + 1);
      }, 500);
      return () => clearTimeout(timeout);
    } else if (currentIndex >= lines.length) {
      setLoading(false); // Stop loading after lines are displayed
    }
  }, [lines, currentIndex]);

  const handleInput = (e) => {
    if (e.key === "Enter" && input.trim()) {
      setOutput("");
      setLines(
        dummyData[input.toLowerCase()] || ["No data found for your query."]
      );
      setCurrentIndex(0);
      setLoading(true); // Start loading animation
    }
  };

  return (
    <div className="w-full flex flex-row gap-10 mt-[100px] mx-auto">
      <div
        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        className="h-full flex flex-col min-h-96 bg-slate-500 gap-5 p-6 rounded shadow-lg"
      >
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          ASK A NEW QUESTION
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          HISTORY
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          DATA PROVENANCE
        </button>
      </div>
      <div className="w-full max-w-3xl mt-2 font-poppins">
        <div className="flex flex-col gap-10">
          <input
            type="text"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            placeholder="Enter Your Prompt"
            className={`px-4 py-2 border-2 rounded-3xl text-lg outline-none transition-all text-white duration-300 ease-in-out ${
              isFocused ? "border-green-500 scale-105" : "border-gray-300"
            }`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleInput}
          />
          <div className="relative">
            {loading && (
              <div className="absolute top-2 left-4 text-green-500">
                <span className="animate-pulse">Loading...</span>
              </div>
            )}
            <div
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              className="px-4 min-h-40 py-4 border-2 rounded-3xl text-lg outline-none transition-all duration-300 ease-in-out text-white font-light hover:border-green-500"
              rows={Math.min(output.split("\n").length + 1, 10)} // Adjust rows dynamically
            >{output}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptSection;
