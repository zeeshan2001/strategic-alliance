import React, { useContext, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { ResponsiveFunnel } from "@nivo/funnel";

import { AppContext } from "../AppContext";
import { SpaceIcon } from "lucide-react";
interface EmployeeHandbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  sectionId: number;
}
const waveData = [
  {
    id: "step_sent",
    value: 75609,
    label: "Sent",
  },
  {
    id: "step_viewed",
    value: 65636,
    label: "Viewed",
  },
  {
    id: "step_clicked",
    value: 44982,
    label: "Clicked",
  },
  {
    id: "step_add_to_card",
    value: 32770,
    label: "Add To Card",
  },
  {
    id: "step_purchased",
    value: 26364,
    label: "Purchased",
  },
];
const tableData = [
  { category: "Academic Research", name: "Global Trends in Foreign Direct Investment (FDI)" },
  { category: "Academic Research", name: "Policies Driving Investment Flows into Emerging Markets" },
  { category: "Academic Research", name: "The Role of Government Incentives in Attracting FDI" },
  { category: "Industry Reports", name: "Investment Opportunities in the Saudi Arabian Energy Sector" },
  { category: "Industry Reports", name: "Feasibility of Investments in the Technology Sector" },
  { category: "Industry Reports", name: "Growth Prospects for Saudi Arabia's Tourism and Hospitality Industry" },
  { category: "Industry Reports", name: "Real Estate Investment Potential in Saudi Arabia" },
  { category: "Market Studies", name: "Market Dynamics and Investment Climate in the Middle East" },
  { category: "Market Studies", name: "Sector Performance in Saudi Arabia's Manufacturing Industry" },
  { category: "Market Studies", name: "Investment Opportunities in Saudi Arabia’s ICT Sector" },
  { category: "Market Studies", name: "Regional Investment Outlook: GCC Countries" },
  { category: "Case Studies", name: "Case Study: Successful Foreign Investment in Saudi Arabia's Vision 2030 Projects" },
  { category: "Case Studies", name: "Lessons from the Economic Diversification Efforts in the UAE" },
  { category: "Case Studies", name: "Case Study: Investment Growth in Saudi Arabia’s Renewable Energy Sector" },
  { category: "Case Studies", name: "Failed Investment Project in Saudi Arabia: Key Takeaways" },
];

const DetailsModal: React.FC<EmployeeHandbookModalProps> = ({
  isOpen,
  onClose,
  sectionId,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-8 shadow-lg rounded-md bg-[#4d4e50] text-white h-[700px] min-w-[1000px] w-full overflow-y-auto font-poppins">
        {/* Header */}
        <DialogTitle className="text-2xl font-semibold mb-2">
          {(sectionId === 6 || sectionId === 7 || sectionId === 3) &&
            "Employee Handbook Details"}

          {sectionId === 8 && "Opportunity Details"}

          {sectionId === 8 && <p className="text-lg mt-3 font-medium">
            Filtered by Opportunity: Green Mobility Network Expansion
            </p>}

          {sectionId === 5 && (
            <div className="flex flex-col w-2/3 gap-5">
              <h3 className="text-white text-lg font-semibold">
                Make Smart Search
              </h3>
              <input
                type="text"
                autoFocus={false}
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                placeholder="Search here"
                className={`px-4 py-2 border-2 text-base font-extralight outline-none transition-all placeholder:text-gray-200 text-white duration-300 ease-in-out ${isFocused ? "border-green-500" : "border-gray-300"
                  }`}
                onFocus={() => setIsFocused(true)}
              />
            </div>
          )}
        </DialogTitle>
        <div className="flex flex-row gap-5 justify-between w-full h-full">
          {sectionId === 8 && (
            <div className="bg-gray-900 p-6 rounded-lg text-xs shadow-lg w-1/2 text-white">
              <div className="mb-2">
                <h2 className="text-sm font-semibold">Project Name:</h2>
                <p className="text-gray-300 ml-4">
                  Green Mobility Network Expansion
                </p>
              </div>

              <div className="mb-2">
                <h2 className="text-sm font-semibold">Sector:</h2>
                <p className="text-gray-300 ml-4">Transportation</p>
              </div>

              <div className="mb-2">
                <h2 className="text-sm font-semibold">Description:</h2>
                <p className="text-gray-300 ml-4">
                  Development of a sustainable and electrified transportation
                  system connecting urban and rural areas. Focus on building EV
                  charging stations, expanding high-speed rail networks, and
                  integrating public transport systems with micro-mobility
                  solutions.
                </p>
              </div>

              <div className="mb-2">
                <h2 className="text-sm font-semibold">Investment Size:</h2>
                <p className="text-gray-300 ml-4">$1.5 Billion</p>
              </div>

              <div className="mb-2">
                <h2 className="text-sm font-semibold">Key Benefits:</h2>
                <ul className="list-disc list-inside text-gray-300 ml-4">
                  <li>Reduction of urban congestion by 40%.</li>
                  <li>
                    Projected CO₂ emissions reduction by 15% in the first 5
                    years.
                  </li>
                  <li>
                    Job creation: Estimated 10,000 jobs across construction and
                    operations.
                  </li>
                </ul>
              </div>

              <div className="mb-2">
                <h2 className="text-sm font-semibold">Target Regions:</h2>
                <p className="text-gray-300 ml-4">
                  Europe, Asia, and North America
                </p>
              </div>

              <div className="mb-2">
                <h2 className="text-sm font-semibold">Timeframe:</h2>
                <p className="text-gray-300 ml-4">2024–2026</p>
              </div>

              <div>
                <h2 className="text-sm font-semibold">
                  Government Incentives:
                </h2>
                <p className="text-gray-300 ml-4">
                  Tax breaks, low-interest loans, and subsidies for green
                  projects.
                </p>
              </div>
            </div>
          )}

          {(sectionId === 6 || sectionId === 7 || sectionId === 3) && (
            <div
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              className="rounded-xl shadow-lg border p-4 w-1/2 text-white font-extralight text-sm"
            >
              <div className="mb-2">
                We are thrilled to have you on board and look forward to seeing
                you thrive in our Team
              </div>
              <div className="mb-4">
                This handbook is designed to familiarize you with our company
                policies, culture, and guidelines to ensure a smooth and
                rewarding experience.
              </div>
              <p className="mb-2">
                The document consists of following sections.
              </p>
              <ul className="list-disc space-y-2 pl-4">
                <li>Introduction</li>
                <li>Company Overview</li>
                <li>Employment Policies</li>
                <li>Compensation and Benefits</li>
                <li>Code of Conduct</li>
                <li>Leave Policies</li>
                <li>Performance and Development</li>
                <li>Disciplinary Procedures</li>
                <li>Technology and Security</li>
                <li>Employee Recognition and Rewards</li>
              </ul>
            </div>
          )}
          {sectionId === 5 && (
            <div className="bg-teal-900 p-6 rounded-lg shadow-lg w-1/2 text-white">
              <h2 className="text-xl font-bold mb-4">Relevant Files:</h2>
              <table className="w-full border-collapse border border-teal-700 text-left">
                <thead>
                  <tr className="bg-teal-800 text-teal-100">
                    <th className="border border-teal-700 px-4 py-2">
                      Category
                    </th>
                    <th className="border border-teal-700 px-4 py-2">
                      Name
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item, index) => (
                    <tr key={index}>
                      <td className="border border-teal-700 px-4 py-2 text-teal-100 hover:text-teal-300 cursor-pointer">
                        {item.category}
                      </td>
                      <td className="border border-teal-700 px-4 py-2 text-teal-100">
                        {item.name}
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          )}
          {sectionId === 8 ? (
           <div className="w-1/2 flex flex-col gap-2 items-center">
           <h2 className="text-lg font-semibold">Opportunity Conversion Funnel </h2>
            <div className="h-[450px] w-full text-black">
              
              <ResponsiveFunnel
                data={waveData}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                valueFormat=" >-.4r"
                colors={{ scheme: "spectral" }}
                borderWidth={20}
                labelColor={{
                  from: "color",
                  modifiers: [["darker", 3]],
                }}
                beforeSeparatorLength={100}
                beforeSeparatorOffset={20}
                afterSeparatorLength={100}
                afterSeparatorOffset={20}
                currentPartSizeExtension={10}
                currentBorderWidth={40}
                motionConfig="wobbly"
              />
            </div></div>
          ) : sectionId === 5 ? (
            <img
              className="h-auto max-h-[450px] w-1/2"
              src="/images/studies.png"
              alt=""
            />
          ) : (
            <img
              className="h-auto max-h-[450px] w-1/2"
              src="/images/handbookImage.png"
              alt=""
            />
          )}
        </div>

        <div className="mt-6 flex text-sm text-white justify-evenly items-center">
          <div className="flex flex-col">
            <div className="font-medium mb-2">Last Update:</div>
            <div>December7, 2024</div>
            {/* {(sectionId === 6 || sectionId === 7 || sectionId === 3) && <div>--------</div>}
            {sectionId === 8 && "December7, 2024"} */}
          </div>
          <div className="flex flex-col">
            <div className="font-medium mb-2">Owner:</div>
            <div>Global Transportation Development Team</div>
            {/* {(sectionId === 6 || sectionId === 7 || sectionId === 3) && <div>--------</div>}
            {sectionId === 8 && "Global Transportation Development Team"}{" "} */}
          </div>
          <div className="flex flex-col">
            <div className="font-medium mb-2">Contact Owner:</div>
            <div>Abdullah</div>
            {/* {(sectionId === 6 || sectionId === 7 || sectionId === 3) && <span>--------</span>}
            {sectionId === 8 && "Abdullah"} */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailsModal;
