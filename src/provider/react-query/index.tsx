import { PropsWithChildren } from "react";

import { queryClient } from "@/configs/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

const ReactQueryProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
