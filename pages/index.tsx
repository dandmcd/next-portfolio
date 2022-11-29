import { NextPage } from "next";
import Me from "../components/Me/Me";
import { getMostRecentBlogPost } from "../lib/api";
import { BlogProps } from "./blog";

interface Props {
  preview: boolean;
  blogPost: BlogProps;
}

const Home: NextPage<Props> = ({ preview, blogPost }) => {
  return (
    <>
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
