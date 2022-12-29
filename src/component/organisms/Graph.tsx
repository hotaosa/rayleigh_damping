import { memo, useContext } from "react";
import {
  CartesianGrid,
  Label,
  Line,
  LineChart,
  ResponsiveContainer,
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
    <ResponsiveContainer width="50%" height={400}>
      <LineChart
        width={600}
        height={400}
        data={data}
        margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
      >
        <Line type="monotone" dataKey="y" stroke="teal" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="x" interval={8} scale="log">
          <Label value="frequency" position="bottom" />
        </XAxis>
        <YAxis>
          <Label value="damping factor" position="left" angle={-90} />
        </YAxis>
        <Tooltip
          cursor={false}
          position={{ x: 90, y: 30 }}
          labelStyle={{ color: "teal" }}
          labelFormatter={(label) => "x : " + label}
          formatter={(value) => Number(value).toExponential(3)}
        />
      </LineChart>
    </ResponsiveContainer>
  );
});
