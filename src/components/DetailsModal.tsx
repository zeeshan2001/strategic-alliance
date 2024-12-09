import React, { useContext } from "react";
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

const DetailsModal: React.FC<EmployeeHandbookModalProps> = ({
    isOpen,
    onClose,
    sectionId,
}) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="p-8 shadow-lg rounded-md bg-[#4d4e50] text-white h-[700px] min-w-[1000px] w-full overflow-y-auto font-poppins">
                {/* Header */}
                <DialogTitle className="text-xl font-semibold mb-2">

                    {(sectionId === 6 || sectionId === 7) && "Employee Handbook Details"}

                    {sectionId === 8 && "Opportunity Details"}
                </DialogTitle>
                <div className="flex flex-row gap-5 justify-between w-full h-full">
                    {sectionId === 8 && (
                        <div className="bg-gray-900 p-6 rounded-lg text-xs shadow-lg w-1/2 text-white">
                            <div className="mb-2">
                                <h2 className="text-sm font-semibold">Project Name:</h2>
                                <p className="text-gray-300 ml-4">Green Mobility Network Expansion</p>
                            </div>

                            <div className="mb-2">
                                <h2 className="text-sm font-semibold">Sector:</h2>
                                <p className="text-gray-300 ml-4">Transportation</p>
                            </div>

                            <div className="mb-2">
                                <h2 className="text-sm font-semibold">Description:</h2>
                                <p className="text-gray-300 ml-4">
                                    Development of a sustainable and electrified transportation system
                                    connecting urban and rural areas. Focus on building EV charging
                                    stations, expanding high-speed rail networks, and integrating public
                                    transport systems with micro-mobility solutions.
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
                                    <li>Projected CO₂ emissions reduction by 15% in the first 5 years.</li>
                                    <li>Job creation: Estimated 10,000 jobs across construction and operations.</li>
                                </ul>
                            </div>

                            <div className="mb-2">
                                <h2 className="text-sm font-semibold">Target Regions:</h2>
                                <p className="text-gray-300 ml-4">Europe, Asia, and North America</p>
                            </div>

                            <div className="mb-2">
                                <h2 className="text-sm font-semibold">Timeframe:</h2>
                                <p className="text-gray-300 ml-4">2024–2026</p>
                            </div>

                            <div>
                                <h2 className="text-sm font-semibold">Government Incentives:</h2>
                                <p className="text-gray-300 ml-4">
                                    Tax breaks, low-interest loans, and subsidies for green projects.
                                </p>
                            </div>
                        </div>

                    )}

                    {(sectionId === 6 || sectionId === 7) && (
                        <p
                            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                            className="rounded-xl shadow-lg border p-4 w-1/2 text-white font-extralight text-sm"
                        >
                            We are thrilled to have you on board and look forward to seeing you
                            thrive in our team. This handbook is designed to familiarize you
                            with our company policies, culture, and guidelines to ensure a
                            smooth and rewarding experience.
                        </p>
                    )}
                    {sectionId === 8 ? (
                        <div className="h-[450px] w-1/2">
                            <ResponsiveFunnel
                                data={waveData}
                                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                                valueFormat=">-.4s"
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
                        </div>
                    ) : (
                        <img
                            className="h-auto max-h-[450px] w-1/2"
                            src="/images/handbookImage.png"
                            alt=""
                        />
                    )}
                </div>

                <div className="relative bottom-0 left-0 mt-6 grid grid-cols-3 gap-4 text-sm text-white">
                    <div className="flex flex-col">
                        <span className="font-medium">Last Update:</span>
                        {(sectionId === 6 || sectionId === 7) && <span>--------</span>}
                        {sectionId === 8 && "December7, 2024"}
                    </div>
                    <div className="flex flex-col">
                        <span className="font-medium">Owner:</span>
                        {(sectionId === 6 || sectionId === 7) && <span>--------</span>}
                        {sectionId === 8 && "Global Transportation Development Team"}{" "}
                    </div>
                    <div className="flex flex-col">
                        <span className="font-medium">Contact Owner:</span>
                        {(sectionId === 6 || sectionId === 7) && <span>--------</span>}
                        {sectionId === 8 && "Abdullah"}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DetailsModal;
