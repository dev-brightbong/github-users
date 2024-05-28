import React, { FunctionComponent } from "react";
import { AppProps } from "next/app";
import BookmarkProvider from "@/provider/bookmark";
import ChakraProviders from "@/provider/chakra-ui";
import ReactQueryProvider from "@/provider/react-query";

const withAppProvider = (AppComponent: FunctionComponent<AppProps>) => {
  return function WrappedAppComponent(props: AppProps) {
    return (
      <ReactQueryProvider>
        <ChakraProviders>
          <BookmarkProvider>
            <AppComponent {...props} />
          </BookmarkProvider>
        </ChakraProviders>
      </ReactQueryProvider>
    );
  };
};

export default withAppProvider;
