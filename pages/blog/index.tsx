import { NextPage } from "next";
import { getPaginatedPostSummaries } from "../../lib/api";
import { Config } from "../../lib/pagination";

import { CommonTitle } from "../../styles/styledCommon";
import styled from "styled-components";
import BlogPagination from "../../components/BlogPagination/BlogPagination";
import BlogListing from "../../components/BlogListing/BlogListing";

const BlogItem = styled.div`
  display: block;
  border-radius: 1em;
  max-width: 1024px;
  margin: 1em auto 0 auto;
  :nth-child(odd) {
    background-color: #f5e269;
  }
  :nth-child(even) {
    background-color: #f9efac;
  }
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
  posts: BlogProps[];
  currentPage: string;
  totalPages: number;
}

const Blog: NextPage<Props> = ({ posts, currentPage, totalPages }) => {
  return (
    <>
      <CommonTitle>The Whatever Blog</CommonTitle>
      {posts.map((post) => {
        return (
          <BlogItem key={post.contentful_id}>
            <BlogListing key={post.slug} blog={post} />
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
