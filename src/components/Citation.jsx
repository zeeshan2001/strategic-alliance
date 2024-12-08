import { useState, useEffect } from "react";

const Citation = () => {
  return (
    <div>
      <h3 className="text-white text-lg font-bold mb-5"> Citation</h3>
      <img src="/images/citation.png" />
      <div className="p-5" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
        <h3 className="text-white text-lg font-bold">Related</h3>
        <p className="border-t border-gray-300 border-solid mt-4 pt-2 cursor-pointer">
          How will the National Investment Strategy impact Saudi Arabia's
          economy by 2030
        </p>
        <p className="border-t border-gray-300 border-solid mt-4 pt-2 cursor-pointer">
          What are the main sectors targeted by the National Investment Strategy
        </p>
        <p className="border-t border-gray-300 border-solid mt-4 pt-2 cursor-pointer">
          CHow does the National Investment Strategy align with Vision 2030
        </p>
        <p className="border-t border-gray-300 border-solid mt-4 pt-2 cursor-pointer">
          What measures are being taken to attract foreign direct investment
        </p>
        <p className="border-t border-gray-300 border-solid mt-4 pt-2 cursor-pointer">
          How will the strategy enhance innovation and local content development
        </p>
      </div>
    </div>
  );
};

export default Citation;
