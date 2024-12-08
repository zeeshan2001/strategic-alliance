import React, {useContext} from "react";
import { AppContext } from "../AppContext";

const DescriptionCard = () => {
  const { modalData, setModalData } = useContext(AppContext);

    console.log("contrenrrrrr: ", modalData);
    
  const data = [
    {
      id: 1,
      title: "Compliance & Guidelines",
      description:
        "This is a detailed description for Compliance & Guidelines.",
    },
    {
      id: 2,
      title: "Employee Handbook",
      description: "This is a detailed description for Employee Handbook.",
    },
    {
      id: 3,
      title: "MISA Policies",
      description: "This is a detailed description for MISA Policies.",
    },
    {
      id: 4,
      title: "SOPS",
      description: "This is a detailed description for SOPS.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 mb-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.map((item) => (
          <div
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            key={item.id}
            className="min-h-60 shadow-lg rounded-xl hover:scale-105 cursor-pointer transition-all duration-300 p-5 hover:shadow-xl"
          >
            <h3 className="text-lg font-semibold text-white mb-3">
              {item.title}
            </h3>
            <p className="text-white">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DescriptionCard;
