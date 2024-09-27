import { format } from "date-fns";
import { getAllPostsWithSlug, getPost } from "../../lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import { RichTextAsset } from "../../components/rich-text-asset";

import {
  ContentfulImg,
  GoBackBlock,
  GoBack,
  Arrow,
  BlogTitle,
  UpdatedAt,
  Content,
  CodeBlock,
  ContentfulHeading,
  ContentfulP,
  Wrapper,
  ContentWrapper,
} from "../../styles/slugstyle";
import CodeSnippet from "../../components/CodeSnippet";
import { NextPage } from "next";
import HeadSeo from "../../components/HeadSeo";
import siteMetadata from "../../lib/siteMetadata";
import { TypeDmPortfolioBlogFields } from "../../lib/content-types";

interface Props {
  post: TypeDmPortfolioBlogFields;
}

const BlogPage: NextPage<Props> = ({ post }) => {
  const { title, published, slug, post: postContent } = post.fields;

  const goBack = () => {
    window.history.back();
  };

  const options = {
    renderNode: {
      [BLOCKS.HEADING_4]: (node: any, children: React.ReactNode) => (
        <ContentfulHeading>{children}</ContentfulHeading>
      ),
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
        <ContentfulP>{children}</ContentfulP>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const fields = node.data.target.fields;
        return (
          <ContentfulImg>
            <RichTextAsset fields={fields} />
          </ContentfulImg>
        );
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
        const { fields } = node.data.target;

        if (fields?.codeSnippet) {
          return (
            <CodeBlock>
              <CodeSnippet code={fields.codeSnippet} />
            </CodeBlock>
          );
        }

        return null;
      },
    },
  };

  return (
    <>
      <HeadSeo
        title={`${title} | ${siteMetadata.title}`}
        canonicalUrl={`${siteMetadata.siteUrl}/blog/${slug}`}
      />
      <Wrapper>
        <BlogTitle>{title}</BlogTitle>

        <ContentWrapper>
          <UpdatedAt>
            Date: {format(new Date(published as unknown as string), "MM/dd/yyyy")}
          </UpdatedAt>
          <Content>
            {postContent && documentToReactComponents(postContent as unknown as Document, options)}
          </Content>
        </ContentWrapper>
      </Wrapper>
      <GoBackBlock>
        <GoBack onClick={goBack}>
          <Arrow></Arrow>Return to previous page
        </GoBack>
      </GoBackBlock>
    </>
  );
};

export default BlogPage;

interface Params {
  slug: string;
}

export const getStaticProps = async ({
  params,
  preview = false,
}: {
  params: Params;
  preview: boolean;
}) => {
  const data = await getPost(params.slug);
  return {
    props: {
      preview,
      post: data ?? null,
    },
    revalidate: 300,
  };
};

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.map((post) => `/blog/${post.fields.slug}`),
    fallback: false,
  };
}
