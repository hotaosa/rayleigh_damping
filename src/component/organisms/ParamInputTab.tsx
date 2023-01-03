import {
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { FDInput } from "../organisms/FDInput";
import { RayleighInput } from "../organisms/RayleighInput";

export const ParamInputTab = () => {
  return (
    <Stack spacing="1">
      <Text fontSize="lg" as="ins" color="gray.600">
        Input Parameters
      </Text>
      <Tabs colorScheme="teal">
        <TabList color="gray.400">
          <Tab>F-D</Tab>
          <Tab>α-β</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <FDInput />
          </TabPanel>
          <TabPanel>
            <RayleighInput />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
};
