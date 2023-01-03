import { ChakraProvider, HStack } from "@chakra-ui/react";
import { HeaderLayout } from "./component/layout/HeaderLayout";
import { Graph } from "./component/organisms/Graph";
import { SettingArea } from "./component/organisms/SettingArea";
import { GraphRangeProvider } from "./providers/GraphProvider";
import { RayleighProvider } from "./providers/RayleighProvider";
import { theme } from "./theme/theme";

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
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
      </ChakraProvider>
    </div>
  );
}

export default App;
