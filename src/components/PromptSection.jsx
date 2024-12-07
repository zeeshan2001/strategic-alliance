import { useState } from "react";

const PromptSection = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto mt-[100px] font-poppins">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          placeholder="Enter Your Prompt"
          className={`px-4 py-2 border-2 rounded-2xl text-lg outline-none transition-all text-white duration-300 ease-in-out ${
            isFocused ? "border-green-500 scale-105" : "border-gray-300"
          }`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <textarea
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          className="px-4 py-2 border-2 rounded-2xl text-lg outline-none transition-all duration-300 ease-in-out text-white hover:border-green-500"
          rows={4}
          defaultValue="Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia"
        />
      </div>
    </div>
  );
};

export default PromptSection;
