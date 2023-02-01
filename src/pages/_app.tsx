import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "@/components/Layout";
import SlideFadeTransition from "@/components/SlideCrossFadeTransition";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      staleTime: 180000, // 3 minutes to stale time
    },
  },
});

const routeChange = () => {
  // Remove media attribute on routeChange to prevent unstyled content
  // Reference: https://github.com/vercel/next.js/issues/17464
  const removeMediaAttr = () => {
    const styleMedia = document.querySelectorAll('style[media="x"]');
    styleMedia.forEach((el) => {
      el.removeAttribute("media");
    });
  };
  removeMediaAttr();
};

Router.events.on("routeChangeComplete", routeChange);
Router.events.on("routeChangeStart", routeChange);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <SlideFadeTransition>
          <Component {...pageProps} />
        </SlideFadeTransition>
      </Layout>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
