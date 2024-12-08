import { ResponsivePie } from "@nivo/pie";
import { categoriesData } from "../utils/commonData";
import { useContext } from "react";
import { AppContext } from "../AppContext";

const Chart = () => {
  // const data = [
  //   {
  //     id: "Research & Studies",
  //     value: 10,
  //     color: "#1C75BC",
  //     content: "Research Content",
  //   },
  //   {
  //     id: "Policies & Procedures",
  //     value: 10,
  //     color: "#00C45A",
  //     content: "Policies Content",
  //   },
  //   {
  //     id: "Documentation",
  //     value: 10,
  //     color: "#D43F97",
  //     content: "Docs Content",
  //   },
  //   {
  //     id: "Data & BI",
  //     value: 10,
  //     color: "#895EA7",
  //     content: "Data Content",
  //   },
  //   {
  //     id: "Country Profiles",
  //     value: 10,
  //     color: "#3EC3DB",
  //     content: "Country Content",
  //   },
  //   {
  //     id: "Organizational Data",
  //     value: 10,
  //     color: "#F8962F",
  //     content: "Org Data Content",
  //   },
  //   {
  //     id: "External Data",
  //     value: 10,
  //     color: "#8B5E3C",
  //     content: "External Data Content",
  //   },
  //   {
  //     id: "Sectoral Analysis",
  //     value: 10,
  //     color: "#EF4136",
  //     content: "Sectoral Content",
  //   },
  // ];
  const { setSectionId } = useContext(AppContext);

  const handleClick = (data) => {
    setSectionId(data?.data?.id);
  };

  return (
    <div style={{ height: 700 }} className="font-poppins  max-w-[800px]">
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
          // return i?.createElement(
          //   l,
          //   { style: { color: t?.color } },
          //   // i?.createElement(s, null, "id"),
          //   // i?.createElement(d, null, "dasdfd"),
          //   // i?.createElement(s, null, "value"),
          //   // i?.createElement(d, null, "dasdf"),
          //   // i?.createElement(s, null, "formattedValue"),
          //   // i?.createElement(d, null, "saad"),
          //   // i?.createElement(s, null, "color"),
          //   // i?.createElement(d, null, "sad")

          // );
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
                href="/images/group.svg"
                className="hover:scale-110 transition-all duration-300 cursor-pointer"
                width="200"
                height="200"
                x="-100"
                y="-100"
              />
            </g>
          ),
        ]}
      />
    </div>
  );
};

export default Chart;
