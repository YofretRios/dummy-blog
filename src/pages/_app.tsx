import "@/styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Inter } from "@next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SlideFadeTransition from "@/components/SlideFadeTransition";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      staleTime: 180000, // 3 minutes to stale time
    },
  },
});

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  useEffect(() => {
    console.log("mounted");

    return () => {
      console.log("unmounted");
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SlideFadeTransition>
        <div className={`${inter.className}`}>
          <Component {...pageProps} />
        </div>
      </SlideFadeTransition>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
