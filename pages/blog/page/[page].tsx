import { NextPage } from "next";
import styled from "styled-components";
import { BlogProps } from "..";
import BlogListing from "../../../components/BlogListing/BlogListing";
import BlogPagination from "../../../components/BlogPagination/BlogPagination";
import HeadSeo from "../../../components/HeadSeo";
import {
  getTotalBlogPosts,
  getPaginatedPostSummaries,
} from "../../../lib/api";
import { Config } from "../../../lib/pagination";
import siteMetadata from "../../../lib/siteMetadata";
import { CommonTitle } from "../../../styles/styledCommon";
import { TypeDmPortfolioBlogFields } from "../../../lib/content-types";

const BlogItem = styled.div<{ isEven: boolean }>`
  display: block;
  border-radius: 1em;
  max-width: 1024px;
  margin: 1em auto 0 auto;
  background-color: ${({ isEven }) => (isEven ? "#FEF3C7" : "#FCD34D")};
`;

interface Props {
  posts: TypeDmPortfolioBlogFields[];
  currentPage: string;
  totalPages: number;
}

const BlogIndexPage: NextPage<Props> = ({ posts, totalPages, currentPage }) => {
  return (
    <>
      <HeadSeo
        title={`Blog | ${siteMetadata.title} `}
        canonicalUrl={`${siteMetadata.siteUrl}/blog/page/${currentPage}`}
      />
      <CommonTitle>The Whatever Blog</CommonTitle>
      {posts.map((post, index) => {
        const isEven = index % 2 === 0;
        return (
          <BlogItem key={post.sys.id} isEven={isEven}>
            <BlogListing key={post.fields.slug} blog={post} />
          </BlogItem>
        );
      })}
      <BlogPagination currentPage={currentPage} totalPages={totalPages} />
    </>
  );
};

export default BlogIndexPage;

interface Params {
  page: number;
}

export const getStaticProps = async ({
  params,
  preview = false,
}: {
  params: Params;
  preview: boolean;
}) => {
  const posts = (await getPaginatedPostSummaries(params.page)) ?? [];
  const totalPages = Math.ceil(posts.total / Config.pagination.pageSize);
  return {
    props: {
      preview,
      posts: posts.items,
      totalPages,
      currentPage: params.page,
    },
    revalidate: 300,
  };
};

export async function getStaticPaths() {
  const totalPosts = await getTotalBlogPosts();
  const totalPages = Math.ceil(totalPosts / Config.pagination.pageSize);

  const paths = [];

  for (let page = 2; page <= totalPages; page++) {
    paths.push({ params: { page: page.toString() } });
  }
  return {
    paths,
    fallback: false,
  };
}
