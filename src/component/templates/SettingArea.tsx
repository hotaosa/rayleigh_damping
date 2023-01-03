import { Stack } from "@chakra-ui/react";
import { GraphRangeInput } from "../organisms/GraphRangeInput";
import { ParamInputTab } from "../organisms/ParamInputTab";

export const SettingArea = () => {
  return (
    <Stack spacing="5" pt={3} pb={3} pl={3} pr={3}>
      <ParamInputTab />
      <GraphRangeInput />
    </Stack>
  );
};
