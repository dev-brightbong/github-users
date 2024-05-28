import theme from "@/configs/theme";
import { ChakraProvider } from "@chakra-ui/react";

const ChakraProviders = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ChakraProviders;
