import { memo, useContext } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { RayleighContext } from "../../providers/RayleighProvider";
import { generateData } from "../../util/generateData";

export const Graph = memo(() => {
  const params = useContext(RayleighContext).params;
  const data = generateData(params);
  return (    
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="y" stroke="teal" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="x" interval={8} scale="log" />
      <YAxis />
      <Tooltip
        cursor={false}
        position={{ x:60, y:5 }}
        labelStyle={{ color: "teal" }}
        labelFormatter={(label) => "x : " + label}
        formatter={(value) => Number(value).toExponential(3)}
      />
    </LineChart>
  );
});
