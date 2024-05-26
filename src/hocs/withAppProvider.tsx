import { ChakraProviders } from "@/provider/chakra-ui";
import ReactQueryProvider from "@/provider/react-query";
import { AppProps } from "next/app";
import React, { FunctionComponent } from "react";

const withAppProvider = (AppComponent: FunctionComponent<AppProps>) => {
  return function WrappedAppComponent(props: AppProps) {
    return (
      <ReactQueryProvider>
        <ChakraProviders>
          <AppComponent {...props} />
        </ChakraProviders>
      </ReactQueryProvider>
    );
  };
};

export default withAppProvider;
