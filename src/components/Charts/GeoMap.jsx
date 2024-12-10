import React from "react";
import geoData from "../../utils/world_countries.json";
import { ResponsiveChoroplethCanvas } from "@nivo/geo";
import { geoMapData } from "../../utils/geoMapData";
const GeoChart = () => {
  const features = geoData?.features;

  return (
    <div className="h-[370px] w-[95%] text-#fff">
      <ResponsiveChoroplethCanvas
        data={geoMapData}
        features={features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="RdBu"
        domain={[0, 1000000]}
        unknownColor="#101b42"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={true}
        graticuleLineColor="rgba(0, 0, 0, .2)"
        borderWidth={0.5}
        borderColor="#fff"
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
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            fill: "#fff",
            translateX: 20,
            translateY: -60,
            itemsSpacing: 0,
            itemWidth: 80,
            itemHeight: 18,
            itemDirection: "left-to-right",
            symbolSize: 14,
          },
        ]}
      />
    </div>
  );
};

export default GeoChart;
