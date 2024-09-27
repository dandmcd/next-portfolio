import { NextPage } from "next";
import { getPaginatedPostSummaries } from "../../lib/api";
import { Config } from "../../lib/pagination";

import { CommonTitle } from "../../styles/styledCommon";
import styled from "styled-components";
import BlogPagination from "../../components/BlogPagination/BlogPagination";
import BlogListing from "../../components/BlogListing/BlogListing";
import HeadSeo from "../../components/HeadSeo";
import siteMetadata from "../../lib/siteMetadata";
import { TypeDmPortfolioBlogFields } from "../../lib/content-types";

const BlogItem = styled.div<{ isEven: boolean }>`
  display: block;
  border-radius: 1em;
  max-width: 1024px;
  margin: 1em auto 0 auto;
  background-color: ${({ isEven }) => (isEven ? "#f9efac" : "#f5e269")};
`;

export interface BlogProps {
  title: string;
  published: string;
  slug: string;
  post: any;
  previewText: string;
  updatedAt: string;
  contentful_id: string;
  imagesCollection: {
    items: {
      url: string;
    }[];
  };
}

interface Props {
  posts: TypeDmPortfolioBlogFields[];
  currentPage: string;
  totalPages: number;
}

const Blog: NextPage<Props> = ({ posts, currentPage, totalPages }) => {
  return (
    <>
      <HeadSeo
        title={`Blog | ${siteMetadata.title} `}
        description={siteMetadata.description}
        canonicalUrl={`${siteMetadata.siteUrl}/blog`}
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

export default Blog;

export const getStaticProps = async ({ preview = false }) => {
  const posts = (await getPaginatedPostSummaries(1)) ?? [];
  const totalPages = Math.ceil(posts.total / Config.pagination.pageSize);
  return {
    props: { posts: posts.items, totalPages, currentPage: "1" },
  };
};
