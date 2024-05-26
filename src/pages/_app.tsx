import type { AppProps } from "next/app";

import withAppProvider from "@/hocs/withAppProvider";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withAppProvider(App);
