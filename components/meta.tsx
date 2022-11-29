import Head from "next/head";

// Need to merge and add in meta files
export default function Meta() {
  return (
    <Head>
      <title>Daniel.Me</title>
      <meta
        name="description"
        content="Portfolio and blog for Daniel McDermott"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
