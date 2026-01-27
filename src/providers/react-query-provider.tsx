"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren } from "react";

type ReactQueryProviderProps = PropsWithChildren;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      placeholderData: (prev: never) => prev,
      refetchOnWindowFocus: false,
    },
  },
});

const ReactQueryProvider: FC<ReactQueryProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
