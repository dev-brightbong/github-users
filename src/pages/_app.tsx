import type { AppProps } from "next/app";

import { ChakraProviders } from "@/provider/chakra-ui";
import ReactQueryProvider from "@/provider/react-query";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
      <ChakraProviders>
        <Component {...pageProps} />
      </ChakraProviders>
    </ReactQueryProvider>
  );
}
