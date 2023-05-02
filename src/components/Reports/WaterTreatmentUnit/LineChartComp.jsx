import React from "react";
import { LineChart, Line, XAxis, YAxis } from "recharts";

const LineChartComp = ({ color, chartData }) => (
  <LineChart width={300} height={300} data={chartData}>
    <XAxis dataKey="name" fontSize={10} tickLine={false} />
    <YAxis dataKey="value" fontSize={10} tickLine={false} />
    <Line dataKey="value" stroke={color} dot={false} />
  </LineChart>
);

export default LineChartComp;
