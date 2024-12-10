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
        // arcLabel={(d) => `saad`}
        enableArcLabels={false}
        arcLinkLabel={(d) => `${d?.data?.description}`}
        onClick={handleClick}
        // layers={[
        //   "arcs",
        //   "arcLabels",
        //   ({ arcs }) => {
        //     if (!categoriesData || categoriesData?.length === 0) {
        //       console.warn("Arcs are undefined or empty");
        //       return null;
        //     }

        //     return (
        //       <g>
        //         {categoriesData?.map((arc, index) => {
        //           // const [x, y] = arc.centroid;
        //           return (
        //             <g
        //               key={arc.id}
        //               transform={`translate(${index * 10 + 100}, ${40 - 20})`}
        //             >
        //               <image
        //                 href="/images/brain.png"
        //                 width="50"
        //                 height="50"
        //                 x="-25"
        //                 y="-25"
        //               />{" "}
        //               <text
        //                 textAnchor="middle"
        //                 y="25"
        //                 style={{
        //                   fill: arc.color,
        //                   fontSize: 12,
        //                   fontWeight: "bold",
        //                 }}
        //               >
        //                 {arc.title + "saad"}
        //               </text>
        //             </g>
        //           );
        //         })}
        //       </g>
        //     );
        //   },
        //   ({ centerX, centerY }) => (
        //     <g transform={`translate(${centerX}, ${centerY})`}>
        //       <image
        //         href="/images/brain.png"
        //         className="hover:scale-110 transition-all duration-300 cursor-pointer"
        //         width="150"
        //         height="150"
        //         x="-75"
        //         y="-75"
        //       />
        //     </g>
        //   ),
        // ]}
        layers={[
          "arcs",
          "arcLabels",
          ({ dataWithArc, arcGenerator, centerX, centerY }) => {
            // Custom layer
            return (
              <g>
                {dataWithArc?.map((arc) => {
                  const [x, y] = arcGenerator.centroid(arc.arc); // Get the coordinates of the centroid for the arc

                  // Adjust centroid coordinates (fine-tune position)
                  const adjustedX = x + centerX;
                  const adjustedY = y + centerY;
                  return (
                    <g
                      key={arc?.data?.id}
                      className="cursor-pointer"
                      onClick={()=>setSectionId(arc?.data?.id)}
                      transform={`translate(${adjustedX}, ${adjustedY})`}
                    >
                      <image
                        href={arc?.data?.imgPath} // Replace with your icon path
                        width="40"
                        height="40"
                        x="-20" // Center the icon
                        y="-45"
                      />
                      <text
                        textAnchor="middle"
                        y="16"
                        style={{
                          fill: "#fff",
                          fontSize: 13,
                          fontWeight: "bold",
                        }}
                      >
                        {arc?.data?.title}
                      </text>
                    </g>
                  );
                })}
              </g>
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
