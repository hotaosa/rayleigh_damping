import { HStack } from "@chakra-ui/react";
import { FreqRangeProvider } from "../../providers/FreqRangeProvider";
import { RayleighProvider } from "../../providers/RayleighProvider";
import { HeaderLayout } from "../layout/HeaderLayout";
import { Graph } from "../organisms/Graph";
import { SettingArea } from "../templates/SettingArea";

export const Home = () => {
  return (
    <HeaderLayout>
      <RayleighProvider>
        <FreqRangeProvider>
          <HStack spacing={2}>
            <SettingArea />
            <Graph />
          </HStack>
        </FreqRangeProvider>
      </RayleighProvider>
    </HeaderLayout>    
  );
};