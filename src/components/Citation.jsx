import { useState, useEffect } from "react";

const Citation = () => {
  const citationData = [
    "How will the National Investment Strategy impact Saudi Arabia's economy by 2030?",
    "What are the main sectors targeted by the National Investment Strategy?",
    "How does the National Investment Strategy align with Vision 2030?",
    "What measures are being taken to attract foreign direct investment?",
    "How will the strategy enhance innovation and local content development?",
  ];

  const [displayedCitations, setDisplayedCitations] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < citationData.length) {
      const timeout = setTimeout(() => {
        setDisplayedCitations((prev) => [...prev, citationData[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, 500); // Adjust time delay as needed
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, citationData]);

  return (
    <div>
      <h3 className="text-white text-lg font-bold mb-5">Citation</h3>
      <img src="/images/citation.png" alt="Citation" />
      <div className="p-5" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
        <h3 className="text-white text-lg font-bold">Related</h3>
        {displayedCitations.map((citation, index) => (
          <p
            key={index}
            className="border-t border-gray-300 border-solid mt-4 pt-2 cursor-pointer"
          >
            {citation}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Citation;
