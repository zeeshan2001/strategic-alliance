import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";

const DescriptionCard = () => {
  const { modalData, setModalData, sectionId } = useContext(AppContext);

  const sectionCardsData = {
    documentation: [
      {
        title: "Compliance & Guidelines",
        description:
          "Policies and procedures ensuring adherence to legal and organizational standards.",
        totalNumber: 15,
        lastUpdate: "15 February 2022",
        owner: "Compliance Team",
      },
      {
        title: "Employee Handbook",
        description:
          "Comprehensive guide for employees, covering policies, benefits, and responsibilities.",
        totalNumber: 12,
        lastUpdate: "10 January 2023",
        owner: "HR Department",
      },
      {
        title: "MISA Policies",
        description:
          "Policies governing internal operations, investments, and external collaborations.",
        totalNumber: 20,
        lastUpdate: "25 December 2023",
        owner: "Legal Affairs",
      },
      {
        title: "SOPs (Standard Operating Procedures)",
        description:
          "Step-by-step procedures for critical organizational processes.",
        totalNumber: 25,
        lastUpdate: "05 February 2024",
        owner: "Operations Team",
      },
    ],
  };

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
      title: "SOPs",
      description: "This is a detailed description for SOPS.",
    },
  ];

  if (sectionId === 6 || sectionId === 7) {
    return (
      <div className="max-w-6xl mx-auto p-6 mb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sectionCardsData?.documentation.map((item, index) => (
            <div
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              key={index}
              className="min-h-60 shadow-lg rounded-xl hover:scale-105 cursor-pointer transition-all duration-300 p-5 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-white mb-5">
                {item.title}
              </h3>
              <p className="text-white mb-4 text-base">{item.description}</p>
              <p className="text-white mb-2 text-sm">
                Total Number: &nbsp;
                <span className="font-thin text-base">{item.totalNumber}</span>
              </p>
              <p className="text-white mb-2 text-base">
                Last Update: &nbsp;
                <span className="font-thin text-base">{item.lastUpdate}</span>
              </p>
              <p className="text-white mb-2 text-base">
                Owner: &nbsp;{" "}
                <span className="font-thin text-base">{item.owner}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (sectionId === 1) {
    return (
      <div className="flex flex-col h-screen text-white w-full mx-auto p-6 mb-16">
        {/* Header */}
        <div className="p-4 text-center font-bold text-4xl">
          Sector Dashboard
        </div>

        <div className="flex flex-1 p-6 gap-6">
          {/* About Sector */}
          <div
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            className="flex flex-col w-2/6 rounded-lg shadow-lg p-4 space-y-2"
          >
            <h2 className="font-semibold"></h2>
            <p className="text-gray-300">
              The global transportation sector is essential for international
              trade and economic activity, facilitating the movement of goods
              and people. It accounts for about $10 trillion in annual economic
              activity, with road transport dominating both freight and
              passenger mobility at over 70% of global logistics. Railways,
              though smaller at 1.3 million kilometers, are vital for bulk goods
              in major countries like the U.S., China, and Russia. Aviation
              connects over 22,000 city pairs and generates $850 billion, while
              maritime transport handles 80% of global trade, shipping 11
              billion tons through over 5,000 ports. Investment in the sector is
              increasingly focused on sustainable solutions, including green
              logistics and high-speed rail, aimed at reducing carbon emissions.
              Technologies like IoT, blockchain, and AI for route optimization
              are enhancing efficiency. Urban areas are benefiting from
              micro-mobility services, while rural regions see improvements in
              connectivity. The sector’s alignment with global goals, such as
              the UN Sustainable Development Goals, emphasizes resilience and
              sustainability, shaping the future of economies.
            </p>
          </div>

          {/* Main Content */}
          <div style={{ backgroundColor: "rgba(255,255,255,0.1)" }} className="flex flex-col flex-1 bg-gray-800 rounded-lg p-6">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-[#1d4f4d] p-4 rounded-lg">
                <h3 className="font-medium text-center">Total Services</h3>
                <h3 className="font-semibold text-center">71</h3>
              </div>
              <div className="bg-[#1d4f4d] p-4 rounded-lg">
                <h3 className="font-medium text-center">Total Goods</h3>
                <h3 className="font-semibold text-center">35</h3>
              </div>
              <div className="bg-[#1d4f4d] p-4 rounded-lg">
                <h3 className="font-medium text-center">Total Investment</h3>
                <h3 className="font-semibold text-center">130 M</h3>
              </div>
            </div>

            {/* Map/Graph Section */}
            <div className="flex flex-1 bg-gray-700 rounded-lg relative">
              <h3 className="absolute top-2 left-4 font-medium">Map\Graph</h3>
              <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                <span>Sector</span>
                <div className="flex items-center space-x-2">
                  {Array.from({ length: 8 }).map((_, idx) => (
                    <span
                      key={idx}
                      className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center"
                    />
                  ))}
                </div>
              </div>
              <div className="absolute bottom-4 right-4 flex items-center">
                <span className="mr-2">Time</span>
                <div className="w-40 bg-gray-500 h-1 flex items-center">
                  <div className="w-4 h-4 bg-gray-300 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Metadata */}
          <div style={{ backgroundColor: "rgba(255,255,255,0.1)" }} className="w-1/8 shadow-lg rounded-lg p-4 space-y-4">
            <div>
              <h3 className="font-medium">Last Update:</h3>
              <p className="text-gray-300">December 7, 2024</p>
            </div>
            <div>
              <h3 className="font-medium">Owner:</h3>
              <p className="text-gray-300">MISA</p>
            </div>
            <div>
              <h3 className="font-medium">Contact Owner:</h3>
              <p className="text-gray-300">Test@test.com</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default DescriptionCard;
