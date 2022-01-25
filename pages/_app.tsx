import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/global.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>axtelius.se</title>
        <meta
          name="description"
          content="Personal webpage for Albin Axtelius"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
