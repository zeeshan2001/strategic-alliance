import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import MyHeatMap from "./Charts/HeatMap";
import DetailsModal from "./DetailsModal";
import { heatMapData } from "../utils/heatMapData";
import { ResponsiveHeatMap } from "@nivo/heatmap";

import { categoriesData } from "../utils/commonData";
import GeoChart from "./Charts/GeoMap";
import { ScrollContext } from "../context/ScrollContext";
const DescriptionCard = () => {
  const { sectionId } = useContext(AppContext);
  const [activeTabId, setActiveTabId] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { targetRef } = useContext(ScrollContext);

  const openModal = () => {
    setIsModalOpen(true);
  };

  // useEffect(() => {
  //   if (sectionId > 0) {
  //     scroller.scrollTo("descriptionSection", {
  //       duration: 500,
  //       delay: 0,
  //       smooth: "easeInOutQuart",
  //     });
  //   }
  // }, [sectionId]);

  const handleScrollToElement = () => {
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const closeModal = () => setIsModalOpen(false);
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
    bussiness_inteligence: [
      {
        title: "Opportunities",
        description:
          "Identifying and tracking investment opportunities across various sectors and regions.",
        totalNumber: "45%",
        totalNumberTitle:
          "Investment Opportunities Converted into Active Investments: ",
        lastUpdate: "10 March 2023",
        owner: "Investment Opportunities Team",
      },
      {
        title: "Financial",
        description:
          "Comprehensive financial data, including reports, projections, and investment trends.",
        totalNumber: "12%",
        totalNumberTitle: "Return on Investment (ROI) of Active Investments :",
        lastUpdate: "15 January 2024",
        owner: "Financial Analysis Department",
      },
      {
        title: "Investor Performance",
        description:
          "Detailed performance metrics and KPIs of active investments across portfolios.",
        totalNumber: "85%",
        totalNumberTitle:
          "Percentage of Investors Meeting or Exceeding Performance Benchmarks :",
        lastUpdate: "05 November 2022",
        owner: "Performance Monitoring Unit",
      },
      {
        title: "Investors Service",
        description:
          "Profiles and data on existing and potential investors, including engagement history.",
        totalNumber: "80%",
        totalNumberTitle: "Investor Satisfaction Score (based on surveys) :",
        lastUpdate: "20 December 2023",
        owner: "Investor Relations Team",
      },
      {
        title: "IT Service Management",
        description:
          "Systems and processes for managing IT services supporting investment workflows.",
        totalNumber: "98%",
        totalNumberTitle:
          "System Uptime Percentage for Critical Investment Systems :",
        lastUpdate: "25 March 2023",
        owner: "IT Support and Service Team",
      },
    ],
    research: [
      {
        title: "Academic Research",
        description:
          "Research papers and academic studies on global investment trends, policies, and innovations.",
        totalNumber: 25,
        lastUpdate: "10 March 2023",
        owner: "Research and Development Team",
      },
      {
        title: "Market Studies",
        description:
          "Comprehensive studies on market behavior, sector performance, and investment opportunities.",
        totalNumber: 18,
        lastUpdate: "20 January 2024",
        owner: "Market Analysis Unit",
      },
      {
        title: "Industry Reports",
        description:
          "Reports on various industries detailing growth trends, risks, and investment feasibility.",
        totalNumber: 30,
        lastUpdate: "05 November 2022",
        owner: "Sector Analysis Department",
      },
      {
        title: "Case Studies",
        description:
          "Detailed analyses of successful and failed investment projects, highlighting key lessons.",
        totalNumber: 12,
        lastUpdate: "15 December 2023",
        owner: "Strategy and Learning Unit",
      },
    ],
    profiles: {
      about: (
        <div className="text-white text-left p-4 font-sans">
          <h2 className="font-bold text-lg mb-3">Sector Brief</h2>
          <p className="mb-2 leading-relaxed">
            Brazil, with a GDP of $2.2 trillion in 2024 and a population of 216
            million, stands as a vital economic powerhouse in Latin America.
          </p>
          <p className="mb-2 leading-relaxed">
            The country's key industries include agriculture, energy, mining,
            manufacturing, and tourism, all of which contribute significantly to
            its economic growth.
          </p>
          <p className="mb-2 leading-relaxed">
            Brazil's investment climate is shaped by its strategic location as a
            gateway to Latin America, abundant natural resources, a robust
            renewable energy sector, and a growing middle class.
          </p>
          <p className="mb-2 leading-relaxed">
            Despite challenges in ease of doing business (ranked 124th
            globally), the nation holds a competitive position, ranking 57th on
            the global competitiveness index.
          </p>
          <p className="mb-2 leading-relaxed">
            Brazil's economy thrives on its key exports, including soybeans,
            iron ore, and petroleum, while renewable energy projects,
            infrastructure development, and the expansion of agribusiness are
            driving future growth.
          </p>
        </div>
      ),
      total_services: "124",
      total_goods: "111",
      total_investment: "130M",
    },
    sector_analysis: {
      about: (
        <div className="text-white text-left p-4 font-sans">
          <h2 className="font-bold text-lg mb-3">Sector Brief</h2>
          <p className="mb-2 leading-relaxed">
            The global transportation sector is essential for international
            trade and economic activity, facilitating the movement of goods and
            people.
          </p>
          <p className="mb-2 leading-relaxed">
            It accounts for about $10 trillion in annual economic activity, with
            road transport dominating both freight and passenger mobility at
            over 70% of global logistics.
          </p>
          <p className="mb-2 leading-relaxed">
            Railways, though smaller at 1.3 million kilometers, are vital for
            bulk goods in major countries like the U.S., China, and Russia.
            Aviation connects over 22,000 city pairs and generates $850 billion,
            while maritime transport handles 80% of global trade, shipping 11
            billion tons through over 5,000 ports.
          </p>
          <p className="mb-2 leading-relaxed">
            Investment in the sector is increasingly focused on sustainable
            solutions, including green logistics and high-speed rail, aimed at
            reducing carbon emissions. Technologies like IoT, blockchain, and AI
            for route optimization are enhancing efficiency.
          </p>
          <p className="mb-2 leading-relaxed">
            Urban areas are benefiting from micro-mobility services, while rural
            regions see improvements in connectivity. The sector’s alignment
            with global goals, such as the UN Sustainable Development Goals,
            emphasizes resilience and sustainability, shaping the future of
            economies.
          </p>
        </div>
      ),
      total_services: "124",
      total_goods: "111",
      total_investment: "130M",
    },
  };

  const businessSectionHeadingData = [
    "Investment Opportunities Converted into Active Investments:",
    "Return on Investment (ROI) of Active Investments:",
    "Percentage of Investors Meeting or Exceeding Performance Benchmarks:",
    "Investor Satisfaction Score (based on surveys):",
    "System Uptime Percentage for Critical Investment Systems",
  ];
  if (sectionId > 0 && sectionId !== 2) {
    return (
      <div className="bg-[#343537] w-full p-14" ref={targetRef}>
        <h2
          className="p-4 font-bold text-4xl text-white text-center mb-10"
          onClick={() => handleScrollToElement()}
        >
          {categoriesData?.[sectionId - 1]?.title}
        </h2>
        {sectionId === 6 ||
        sectionId === 7 ||
        sectionId === 8 ||
        sectionId === 5 ||
        sectionId === 3 ? (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {(sectionId == 6 || sectionId === 7 || sectionId === 3) &&
                sectionCardsData?.documentation?.map((item, index) => (
                  <div
                    style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                    key={index}
                    onClick={openModal}
                    className="min-h-60 shadow-lg rounded-xl hover:scale-105 cursor-pointer transition-all duration-300 p-5 hover:shadow-xl"
                  >
                    <h3 className="text-xl font-semibold text-white mb-5">
                      {item.title}
                    </h3>
                    <p className="text-white mb-4 text-base">
                      {item.description}
                    </p>
                    <p className="text-white mb-2 text-sm">
                      Number of Documents: &nbsp;
                      <span className="font-thin text-base">
                        {item.totalNumber}
                      </span>
                    </p>
                    <p className="text-white mb-2 text-base">
                      Last Update: &nbsp;
                      <span className="font-thin text-base">
                        {item.lastUpdate}
                      </span>
                    </p>
                    <p className="text-white mb-2 text-base">
                      Owner: &nbsp;{" "}
                      <span className="font-thin text-base">{item.owner}</span>
                    </p>
                  </div>
                ))}
              {sectionId === 8 &&
                sectionCardsData?.bussiness_inteligence?.map((item, index) => (
                  <div
                    style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                    key={index}
                    onClick={openModal}
                    className="min-h-60 shadow-lg rounded-xl hover:scale-105 cursor-pointer transition-all duration-300 p-5 hover:shadow-xl"
                  >
                    <h3 className="text-xl font-semibold text-white mb-5">
                      {item.title}
                    </h3>
                    <p className="text-white mb-4 text-base">
                      {item.description}
                    </p>
                    <p className="text-white mb-2 text-base">
                      {sectionId === 8 ? (
                        <span className="font-semibold">
                          {businessSectionHeadingData[index]}
                        </span>
                      ) : (
                        "Number of Documents:"
                      )}
                      &nbsp;
                      <span className="font-thin text-base">
                        {item.totalNumber}
                      </span>
                    </p>
                    <p className="text-white mb-2 text-base">
                      Last Update: &nbsp;
                      <span className="font-thin text-base">
                        {item.lastUpdate}
                      </span>
                    </p>
                    <p className="text-white mb-2 text-base">
                      Owner: &nbsp;{" "}
                      <span className="font-thin text-base">{item.owner}</span>
                    </p>
                  </div>
                ))}

              {sectionId === 5 &&
                sectionCardsData?.research?.map((item, index) => (
                  <div
                    style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                    key={index}
                    onClick={openModal}
                    className="min-h-60 shadow-lg rounded-xl hover:scale-105 cursor-pointer transition-all duration-300 p-5 hover:shadow-xl"
                  >
                    <h3 className="text-xl font-semibold text-white mb-5">
                      {item.title}
                    </h3>
                    <p className="text-white mb-4 text-base">
                      {item.description}
                    </p>
                    <p className="text-white mb-2 text-sm">
                      Number of Documents: &nbsp;
                      <span className="font-thin text-base">
                        {item.totalNumber}
                      </span>
                    </p>
                    <p className="text-white mb-2 text-base">
                      Last Update: &nbsp;
                      <span className="font-thin text-base">
                        {item.lastUpdate}
                      </span>
                    </p>
                    <p className="text-white mb-2 text-base">
                      Owner: &nbsp;{" "}
                      <span className="font-thin text-base">{item.owner}</span>
                    </p>
                  </div>
                ))}
            </div>
            <DetailsModal
              isOpen={isModalOpen}
              onClose={closeModal}
              sectionId={sectionId}
            />
          </div>
        ) : (
          <div className="flex flex-col text-white w-full">
            {/* Header */}

            {sectionId === 4 && (
              <div className="flex justify-end w-full pr-8">
                <div
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  className="flex flex-row rounded-lg shadow-xl p-4 border gap-4"
                >
                  <button
                    onClick={() => setActiveTabId(1)}
                    style={{
                      backgroundColor:
                        activeTabId === 1 ? "#123235" : "rgba(255,255,255,0.1)",
                    }}
                    className="text-white px-4 h-10 py-2 rounded hover:bg-green-600 border"
                  >
                    Country
                  </button>
                  <button
                    onClick={() => setActiveTabId(2)}
                    style={{
                      backgroundColor:
                        activeTabId === 2 ? "#123235" : "rgba(255,255,255,0.1)",
                    }}
                    className="text-white px-4 h-10 py-2 rounded hover:bg-green-600 border"
                  >
                    Investor
                  </button>
                  <button
                    onClick={() => setActiveTabId(3)}
                    style={{
                      backgroundColor:
                        activeTabId === 3 ? "#123235" : "rgba(255,255,255,0.1)",
                    }}
                    className="text-white px-4 h-10 py-2 rounded hover:bg-green-600 border"
                  >
                    Opportunity
                  </button>
                  <button
                    onClick={() => setActiveTabId(4)}
                    style={{
                      backgroundColor:
                        activeTabId === 4 ? "#123235" : "rgba(255,255,255,0.1)",
                    }}
                    className="text-white px-4 h-10 py-2 rounded hover:bg-green-600 border"
                  >
                    Region
                  </button>
                </div>
              </div>
            )}

            <div className="flex w-full p-6 gap-6">
              {/* About Sector */}

              <div className="flex flex-col w-2/6 rounded-lg shadow-lg p-4 space-y-2 border bg-[#0000001a]">
                <p className="text-gray-100 text-base font-sans text-left leading-loose">
                  {sectionId === 1
                    ? sectionCardsData?.sector_analysis?.about
                    : sectionCardsData?.profiles?.about}
                </p>
              </div>

              {/* Main Content */}
              <div
                style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
                className="flex flex-col flex-1 bg-gray-800 rounded-lg p-6"
              >
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#123235] p-4 rounded-lg">
                    <h3 className="font-medium text-center"># of Licenses</h3>
                    <h3 className="font-semibold text-center">124</h3>
                  </div>
                  <div className="bg-[#123235] p-4 rounded-lg">
                    <h3 className="font-medium text-center">
                      # of Active Licenses
                    </h3>
                    <h3 className="font-semibold text-center">111</h3>
                  </div>
                  <div className="bg-[#123235] p-4 rounded-lg">
                    <h3 className="font-medium text-center">
                      Total Investment
                    </h3>
                    <h3 className="font-semibold text-center">130M</h3>
                  </div>
                </div>

                {/* Map/Graph Section */}
                <div className="flex flex-1 bg-gray-700 rounded-lg relative">
                  {/* <h3 className="absolute top-2 left-4 font-medium">Map\Graph</h3> */}
                  <div className="w-full h-[480px] flex items-center justify-center text-black">
                    {sectionId === 1 && (
                      <div className="h-[480px] w-full text-black">
                        <ResponsiveHeatMap
                          data={heatMapData}
                          margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
                          valueFormat=">-.2s"
                          theme={{
                            axis: {
                              ticks: {
                                text: {
                                  fill: "#fff", // White axis tick text
                                  fontSize: 12, // Adjust font size if needed
                                },
                              },
                              legend: {
                                text: {
                                  fill: "#fff", // White axis legend text
                                },
                              },
                            },
                            legends: {
                              text: {
                                fill: "#fff", // White legend text
                              },
                            },
                          }}
                          axisTop={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: -90,
                            legend: "",
                            legendOffset: 46,
                            truncateTickAt: 0,
                          }}
                          axisRight={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: "country",
                            legendPosition: "middle",
                            legendOffset: 70,
                            truncateTickAt: 0,
                          }}
                          axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: "country",
                            legendPosition: "middle",
                            legendOffset: -72,
                            truncateTickAt: 0,
                          }}
                          colors={{
                            type: "diverging",
                            scheme: "red_yellow_blue",
                            divergeAt: 0.5,
                            minValue: -100000,
                            maxValue: 100000,
                          }}
                          emptyColor="#555555"
                          // legends={[
                          //   {
                          //     anchor: "bottom",
                          //     translateX: 0,
                          //     fill: "#fff",
                          //     translateY: 30,
                          //     length: 400,
                          //     thickness: 8,
                          //     direction: "row",
                          //     tickPosition: "after",
                          //     tickSize: 3,
                          //     tickSpacing: 4,
                          //     tickOverlap: false,
                          //     tickFormat: ">-.2s",
                          //     title: "Value →",
                          //     titleAlign: "start",
                          //     titleOffset: 4,
                          //   },
                          // ]}
                          // tooltip={(cell) => `${cell?.id}`}
                        />
                      </div>
                    )}
                    {sectionId === 4 && <GeoChart />}
                  </div>
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
              {sectionId !== 4 && (
                <div className="w-[340px] shadow-lg rounded-lg p-4 space-y-4 border flex justify-between flex-col bg-[#0000001a]">
                  {sectionId === 1 && (
                    <div className="w-full">
                      <h2 class="text-xl font-bold text-left text-gray-100 mb-3">
                        Transportation Insights
                      </h2>

                      <ul class="list-disc list-inside space-y-2 text-gray-200">
                        <li class="text-base">
                          Countries like <b>Japan</b> and <b>Norway</b> favor
                          eco-friendly transportation modes (Trains, Mopeds).
                        </li>

                        <li class="text-base">
                          The <b>US</b> shows strong reliance on Subway systems
                          but struggles with Cars and Boats.
                        </li>
                        <li class="text-base">
                          The <b>US</b> shows strong reliance on Subway systems
                          but struggles with Cars and Boats.
                        </li>

                        <li class="text-base">
                          European countries like <b>France</b> and{" "}
                          <b>Germany</b> showcase diverse results, often
                          highlighting inefficiencies in Boat and Moto use.
                        </li>

                        <li class="text-base">
                          <b>Iceland</b> and <b>Vietnam</b> emphasize
                          sustainable options such as Bicycles.
                        </li>
                      </ul>
                    </div>
                  )}

                  <div>
                    <div className="flex text-sm gap-2 mb-1">
                      <h3 className="font-medium">Last Update:</h3>
                      <p className="text-gray-300">December 7, 2024</p>
                    </div>
                    <div className="flex text-sm gap-2 mb-1">
                      <h3 className="font-medium">Owner:</h3>
                      <p className="text-gray-300">MISA</p>
                    </div>
                    <div className="flex text-sm gap-2 mb-1">
                      <h3 className="font-medium">Contact Owner:</h3>
                      <p className="text-gray-300">Test@test.com</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  } else if (sectionId === 2) {
    return (
      <div className="bg-[#343537] w-full p-14" ref={targetRef}>
        <h2
          className="p-4 font-bold text-4xl text-white text-center"
          onClick={() => handleScrollToElement()}
        >
          {categoriesData?.[sectionId - 1]?.title}
        </h2>
        <p className="p-4 font-semibold text-2xl text-red-500 text-center">
          External Data is under development.
        </p>
      </div>
    );
  } else {
    return null;
  }
};

export default DescriptionCard;
