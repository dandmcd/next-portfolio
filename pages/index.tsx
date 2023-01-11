import { NextPage } from "next";
import HeadSeo from "../components/HeadSeo";
import Me from "../components/Me/Me";
import { getMostRecentBlogPost } from "../lib/api";
import siteMetadata from "../lib/siteMetadata";
import { BlogProps } from "./blog";

interface Props {
  preview: boolean;
  blogPost: BlogProps;
}

const Home: NextPage<Props> = ({ preview, blogPost }) => {
  return (
    <>
      <HeadSeo
        title="Daniel.Me"
        description="Bringing ideas to life back to front"
        canonicalUrl={siteMetadata.siteUrl}
      />
      <Me blogPost={blogPost} />
    </>
  );
};

export const getStaticProps = async ({ preview = false }) => {
  const blogPost = (await getMostRecentBlogPost()) ?? [];
  return {
    props: { preview, blogPost },
    revalidate: 30,
  };
};

export default Home;
