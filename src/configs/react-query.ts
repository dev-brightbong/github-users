import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1 * 6 * 1000,
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});