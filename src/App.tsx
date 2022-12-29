import { ChakraProvider } from '@chakra-ui/react';
import { Graph } from './component/organisms/Graph';
import { SettingArea } from './component/organisms/SettingArea';
import { RayleighProvider } from './providers/RayleighProvider';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <RayleighProvider>
          <SettingArea />
          <Graph />
        </RayleighProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
