import { NextPage } from "next";
import Head from "next/head";

interface Props {
  title: string;
  description?: string;
  canonicalUrl: string;
  children?: React.ReactNode;
}

const HeadSeo: NextPage<Props> = ({
  title,
  description,
  canonicalUrl,
  children,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      {children}
    </Head>
  );
};

export default HeadSeo;
