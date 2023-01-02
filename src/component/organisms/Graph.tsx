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
import { GraphRangeContext } from "../../providers/GraphProvider";
import { RayleighContext } from "../../providers/RayleighProvider";
import { generateData } from "../../util/generateData";

export const Graph = memo(() => {
  const rayleighParams = useContext(RayleighContext).params;
  const data = generateData(rayleighParams);
  const graphRange = useContext(GraphRangeContext).params;
  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart
        data={data}
        margin={{ top: 50, right: 50 }}
      >
        <Line type="monotone" dataKey="y" stroke="teal" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis type="number" dataKey="x" scale="log" domain={[graphRange.xLowerBound, graphRange.xUpperBound]} allowDataOverflow={true} interval={8}>
          {/* <Label value="frequency" position="bottom" /> */}
        </XAxis>
        <YAxis type="number" domain={[graphRange.yLowerBound, graphRange.yUpperBound]} allowDataOverflow={true}>
        {/* <Label value="damping factor" position="left" angle={-90} />         */}
        </YAxis>
        <Tooltip
          cursor={false}
          position={{ x: 60, y: 50 }}
          labelStyle={{ color: "teal" }}
          labelFormatter={(label) => "x : " + label}
          formatter={(value) => Number(value).toExponential(3)}
        />
      </LineChart>
    </ResponsiveContainer>
  );
});
