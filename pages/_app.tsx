import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Layout from "../components/layout";
import "../styles/prism.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}
