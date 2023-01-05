import { Stack } from "@chakra-ui/react";
import { FreqRangeInput } from "../organisms/FreqRangeInput";
import { ParamInputTab } from "../organisms/ParamInputTab";

export const SettingArea = () => {
  return (
    <Stack spacing="5" pt={3} pb={3} pl={3} pr={3}>
      <ParamInputTab />
      <FreqRangeInput />
    </Stack>
  );
};
