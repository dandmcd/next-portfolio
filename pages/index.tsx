import Me from "../components/Me/Me";
import { getMostRecentBlogPost, getPageContent } from "../lib/api";
import { CONTENTFUL_PAGE_IDS } from "../lib/contentfulPages";

export const getStaticProps = async () => {
  const content = await getPageContent(CONTENTFUL_PAGE_IDS.home);

  const blogPost = (await getMostRecentBlogPost()) ?? [];

  return {
    props: { blogPost, content },
    revalidate: 30,
  };
};

export default Me;
