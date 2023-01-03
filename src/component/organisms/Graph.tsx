import { Box, HStack, Stack } from "@chakra-ui/react";
import { memo, useContext } from "react";
import {
  CartesianGrid,
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
import { CopyableText } from "../molecules/CopyableText";

export const Graph = memo(() => {
  const rayleighParams = useContext(RayleighContext).params;
  const data = generateData(rayleighParams);
  const graphRange = useContext(GraphRangeContext).params;

  return (
    <Stack w="100%" pt={10} align="center">
      <HStack h={5}>
        <CopyableText fontSize="lg" prefix="α: ">
          {rayleighParams.alpha.toExponential(3)}
        </CopyableText>
        <Box w={5} />
        <CopyableText fontSize="lg" prefix="β: ">
          {rayleighParams.beta.toExponential(3)}
        </CopyableText>
      </HStack>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={data} margin={{ right: 50 }}>
          <Line type="monotone" dataKey="y" stroke="teal" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis
            type="number"
            dataKey="x"
            scale="log"
            domain={[graphRange.xLowerBound, graphRange.xUpperBound]}
            allowDataOverflow={true}
            interval={8}
          />
          <YAxis
            type="number"
            domain={[graphRange.yLowerBound, graphRange.yUpperBound]}
            allowDataOverflow={true}
          />
          <Tooltip
            cursor={false}
            position={{ x: 60, y: 0 }}
            labelStyle={{ color: "teal" }}
            labelFormatter={(label) => "x : " + label}
            formatter={(value) => Number(value).toExponential(3)}
          />
        </LineChart>
      </ResponsiveContainer>
    </Stack>
  );
});
