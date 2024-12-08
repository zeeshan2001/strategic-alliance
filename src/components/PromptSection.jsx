import { useState } from "react";

const PromptSection = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="w-full flex flex-row gap-10  mt-[100px] mx-auto">
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
      <div className="w-full max-w-3xl  mt-2 font-poppins">
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
          />
          <textarea
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            className="px-4 py-2 border-2 rounded-3xl text-lg outline-none transition-all duration-300 ease-in-out text-white font-light hover:border-green-500"
            rows={4}
            disabled
            defaultValue="Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia"
          />
        </div>
      </div>
    </div>
  );
};

export default PromptSection;
