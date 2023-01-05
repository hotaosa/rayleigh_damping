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
import { FreqRangeContext } from "../../providers/FreqRangeProvider";
import { RayleighContext } from "../../providers/RayleighProvider";
import { generateData } from "../../util/generateData";
import { CopyableText } from "../molecules/CopyableText";

export const Graph = memo(() => {
  const rayleighParams = useContext(RayleighContext).params;
  const freqRange = useContext(FreqRangeContext).params;
  const data = generateData(rayleighParams, freqRange);

  return (
    <Stack w="100%" pt={10} align="center">
      <HStack h={5}>
        {rayleighParams.isValid ? (
          <CopyableText fontSize="lg" prefix="α: ">
            {rayleighParams.alpha.toExponential(3)}
          </CopyableText>
        ) : (
          <Box w={5} />
        )}
        <Box w={5} />
        {rayleighParams.isValid ? (
          <CopyableText fontSize="lg" prefix="β: ">
            {rayleighParams.beta.toExponential(3)}
          </CopyableText>
        ) : (
          <Box w={5} />
        )}
      </HStack>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={data} margin={{ right: 50 }}>
          <Line type="monotone" dataKey="y" stroke="teal" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis
            type="number"
            dataKey="x"
            scale="log"
            domain={[freqRange.lowerBound, freqRange.upperBound]}
            interval={8}
          />
          <YAxis
            type="number"
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
