import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./component/pages/Home";
import { theme } from "./theme/theme";

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Home />
      </ChakraProvider>
    </div>
  );
}

export default App;
