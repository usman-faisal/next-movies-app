import Layout from "../components/layout/Layout";
import "../styles/globals.scss";
import Router from "next/router";
import { useEffect, useState } from "react";
import Loading from "../components/ui/Loading";

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    Router.events.on("routeChangeStart", () => setIsLoading(true));
    Router.events.on("routeChangeComplete", () => setIsLoading(false));
  }, [Router]);
  return (
    <Layout>
      {isLoading && <Loading />}
      <Component {...pageProps} />
    </Layout>
  );
}
