import { ResponsivePie } from "@nivo/pie";
import { categoriesData } from "../utils/commonData";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../AppContext";
import { Element, Link, scroller } from "react-scroll";

const Chart = () => {
  const { setSectionId } = useContext(AppContext);
  const chartRef = useRef(null); // Reference to the chart container
  const [isInView, setIsInView] = useState(false); // State to track visibility

  // Intersection Observer to trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the chart is in view
        if (entry.isIntersecting) {
          setIsInView(true); // Trigger animation when the chart comes into view
        }
      },
      {
        threshold: 0.2, // The element should be 50% visible before triggering
      }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current); // Observe the chart container
    }

    // Cleanup observer when component unmounts
    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  const handleClick = (data) => {
    setSectionId(data?.data?.id);
  };

  return (
    <div>
      <h2 className="font-bold text-4xl text-white text-center my-10">
        MISA Data Dynamo
      </h2>
      <div
        ref={chartRef}
        style={{ height: 700 }}
        className={`font-poppins mt-10 ${isInView ? "rotating-container" : ""}`}
      >
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
          enableArcLabels={false}
          arcLinkLabel={(d) => `${d?.data?.description}`}
          onClick={handleClick}
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
                        onClick={() => {
                          setSectionId(arc?.data?.id);
                        }}
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
    </div>
  );
};

export default Chart;
