import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1 * 6 * 1000,
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});
