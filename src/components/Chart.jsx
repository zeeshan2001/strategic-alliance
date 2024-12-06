import { ResponsivePie } from "@nivo/pie";

const Chart = () => {
  const data = [
    { id: "Research & Studies", value: 10, color: "#1C75BC" },
    { id: "Policies & Procedures", value: 10, color: "#00C45A" },
    { id: "Documentation", value: 10, color: "#D43F97" },
    { id: "Data & BI", value: 10, color: "#895EA7" },
    { id: "Country Profiles", value: 10, color: "#3EC3DB" },
    { id: "Organizational Data", value: 10, color: "#F8962F" },
    { id: "External Data", value: 10, color: "#8B5E3C" },
    { id: "Sectoral Analysis", value: 10, color: "#EF4136" },
  ];

  return (
    <div style={{ height: 700 }} className="mt-20">
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={4}
        activeOuterRadiusOffset={15}
        colors={({ data }) => data?.color}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.6]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#ffffff"
        arcLinkLabelsThickness={1}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor="#ffffff"
        layers={[
          "arcs",
          "labels",
          "legends",
          // Custom layer for the center image
          ({ centerX, centerY }) => (
            <g transform={`translate(${centerX}, ${centerY})`}>
              <image
                href="/images/Group.svg"
                width="260"
                height="260"
                x="-130"
                y="-130"
              />
            </g>
          ),
        ]}
      />
    </div>
  );
};

export default Chart;
