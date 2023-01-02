import { ChakraProvider, HStack } from '@chakra-ui/react';
import { Graph } from './component/organisms/Graph';
import { SettingArea } from './component/organisms/SettingArea';
import { GraphRangeProvider } from './providers/GraphProvider';
import { RayleighProvider } from './providers/RayleighProvider';
import { theme } from './theme/theme';

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <RayleighProvider>
          <GraphRangeProvider>
            <HStack spacing={2}>
              <SettingArea />
              <Graph />
            </HStack>
          </GraphRangeProvider>
        </RayleighProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
