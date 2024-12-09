import { ResponsivePie } from "@nivo/pie";
import { categoriesData } from "../utils/commonData";
import { useContext } from "react";
import { AppContext } from "../AppContext";

const Chart = () => {

  const { setSectionId } = useContext(AppContext);

  const handleClick = (data) => {
    setSectionId(data?.data?.id);
  };

  return (
    <div style={{ height: 700 }} className="font-poppins">
      <ResponsivePie
        data={categoriesData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.4}
        padAngle={1}
        cornerRadius={4}
        activeOuterRadiusOffset={25}
        colors={({ data }) => data?.color}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.6]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#ffffff"
        // arcLinkLabelsThickness={1}
        // arcLabelsSkipAngle={15}
        tooltip={(e) => {
          const { datum: t } = e;

          return (
            <div
              style={{ background: t?.color }}
              className="rounded-md shadow-lg text-white font-poppins p-4 max-w-[200px] text-left"
            >
              <h4 className="text-base font-semibold">{t?.data?.title}</h4>
              <p className="text-xs font-normal">{t?.data?.description}</p>
            </div>
          );
          
        }}
        arcLabelsTextColor="#ffffff"
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d?.data?.title}`}
        arcLinkLabel={(d) => `${d?.data?.description}`}
        onClick={handleClick}
        layers={[
          "arcs", // Default arcs layer
          "arcLabels", // Default labels on arcs
          "arcLinkLabels", // Lines connecting labels to arcs
          "legends", // Default legend
          ({ centerX, centerY, arcs }) => {
            return (
              <foreignObject
                width="100%"
                height="100%"
                style={{
                  overflow: "visible",
                  pointerEvents: "none", // Prevent blocking interactions
                }}
              >
                {arcs?.map((arc) => {
                  const [x, y] = arc.centroid;
                  return (
                    <div
                      key={arc.data.id}
                      style={{
                        position: "absolute",
                        top: `${centerY + y}px`,
                        left: `${centerX + x}px`,
                        transform: "translate(-50%, -50%)",
                        background: "white",
                        color: arc.data.color,
                        padding: "5px 10px",
                        borderRadius: "5px",
                        fontSize: "12px",
                        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                        pointerEvents: "none", // Ensure it's not interactive
                      }}
                    >
                      {arc.data.content}
                    </div>
                  );
                })}
              </foreignObject>
            );
          },
          ({ centerX, centerY }) => (
            <g transform={`translate(${centerX}, ${centerY})`}>
              <image
                href="/images/brain.png"
                className="hover:scale-110 transition-all duration-300 cursor-pointer"
                width="150"
                height="150"
                x="-75"
                y="-75"
              />
            </g>
          ),
        ]}
      />
    </div>
  );
};

export default Chart;
