import { XAxis, BarChart, Bar, YAxis } from "recharts";

const BarChartComp = ({ color, chartData }) => {
  return (
    <BarChart width={300} height={300} data={chartData}>
      <XAxis dataKey="name" fontSize={10} axisLine={false} tickLine={false} />
      <YAxis dataKey="value" fontSize={10} axisLine={false} tickLine={false} />
      <defs>
        <linearGradient id={"chartLG" + color} x2="0" y2="100%">
          <stop offset="0" stopColor={color} />
          <stop offset="1" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
      <Bar
        dataKey="value"
        fill={`url("#${"chartLG" + color}")`}
        barSize={35}
        radius={50}
      />
    </BarChart>
  );
};

export default BarChartComp;
