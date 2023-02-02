import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "@/components/Layout";
import SlideFadeTransition from "@/components/CrossFadeTransition";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      staleTime: 60000, // 1 minutes to stale time
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SlideFadeTransition>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SlideFadeTransition>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
