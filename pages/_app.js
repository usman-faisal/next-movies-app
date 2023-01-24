import Layout from "../components/layout/Layout";
import "../styles/globals.scss";
import Router from "next/router";
import { useEffect, useState } from "react";
import Loading from "../components/ui/Loading";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    Router.events.on("routeChangeStart", () => setIsLoading(true));
    Router.events.on("routeChangeComplete", () => setIsLoading(false));
  }, [Router]);
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next js movies app</title>
      </Head>
      <Layout>
        {isLoading && <Loading />}
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
