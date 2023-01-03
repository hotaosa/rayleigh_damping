import { HStack } from "@chakra-ui/react";
import { GraphRangeProvider } from "../../providers/GraphProvider";
import { RayleighProvider } from "../../providers/RayleighProvider";
import { HeaderLayout } from "../layout/HeaderLayout";
import { Graph } from "../organisms/Graph";
import { SettingArea } from "../templates/SettingArea";

export const Home = () => {
  return (
    <HeaderLayout>
      <RayleighProvider>
        <GraphRangeProvider>
          <HStack spacing={2}>
            <SettingArea />
            <Graph />
          </HStack>
        </GraphRangeProvider>
      </RayleighProvider>
    </HeaderLayout>    
  );
};