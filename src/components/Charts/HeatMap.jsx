import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

const data = [
    { country: "Japan", Train: -51247, Subway: -37755, Bus: 93561, Car: 10000, Bicycle: 2500 },
    { country: "France", Train: 61782, Subway: 98651, Bus: -61806, Car: 45000, Bicycle: -1500 },
    { country: "US", Train: -3994, Subway: 89285, Bus: -49254, Car: 32000, Bicycle: 12000 },
    { country: "Germany", Train: 53390, Subway: 55253, Bus: 10425, Car: -97125, Bicycle: -3000 },
    { country: "Norway", Train: -87845, Subway: 70385, Bus: 7197, Car: 12000, Bicycle: 8000 },
    { country: "UK", Train: 24500, Subway: 87654, Bus: 54321, Car: 32100, Bicycle: 5000 },
    { country: "India", Train: -12000, Subway: 64000, Bus: 87000, Car: 15000, Bicycle: 7000 },
    { country: "China", Train: 92000, Subway: 108000, Bus: 97000, Car: 35000, Bicycle: 15000 },
    { country: "Brazil", Train: 7600, Subway: 45000, Bus: 22000, Car: 18000, Bicycle: -4000 },
    { country: "Australia", Train: -48000, Subway: 31000, Bus: 12000, Car: 23000, Bicycle: 2000 },
  ];
  

const MyHeatMap = () => {
  const colors = ["#FF6B6B", "#FFD93D", "#6BCB77"]; // Adjust colors for visual effect

  return (
    <ResponsiveContainer width="95%" height={520}>
      <BarChart layout="vertical" data={data} barCategoryGap="20%">
        <YAxis dataKey="country" type="category" />
        <XAxis type="number" />
        <Tooltip />
        <Bar dataKey="Train" fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-train-${index}`} fill={colors[index % 3]} />
          ))}
        </Bar>
        <Bar dataKey="Subway" fill="#82ca9d">
          {data.map((entry, index) => (
            <Cell key={`cell-subway-${index}`} fill={colors[index % 3]} />
          ))}
        </Bar>
        <Bar dataKey="Bus" fill="#ffc658">
          {data.map((entry, index) => (
            <Cell key={`cell-bus-${index}`} fill={colors[index % 3]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MyHeatMap;
