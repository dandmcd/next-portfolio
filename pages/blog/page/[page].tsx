import { NextPage } from "next";
import styled from "styled-components";
import { BlogProps } from "..";
import BlogListing from "../../../components/BlogListing/BlogListing";
import BlogPagination from "../../../components/BlogPagination/BlogPagination";
import {
  getoTotalBlogPosts,
  getPaginatedPostSummaries,
} from "../../../lib/api";
import { Config } from "../../../lib/pagination";
import { CommonTitle } from "../../../styles/styledCommon";

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

interface Props {
  posts: BlogProps[];
  currentPage: string;
  totalPages: number;
}

const BlogIndexPage: NextPage<Props> = ({ posts, totalPages, currentPage }) => {
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
  };
};

export async function getStaticPaths() {
  const totalPosts = await getoTotalBlogPosts();
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
