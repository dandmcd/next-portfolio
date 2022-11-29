import { format } from "date-fns";
import { getAllPostsWithSlug, getPost } from "../../lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { RichTextAsset, RichTextEntry } from "../../components/rich-text-asset";

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
import { BlogProps } from ".";
import { NextPage } from "next";

interface Props {
  post: BlogProps;
}

const BlogPage: NextPage<Props> = ({ post }) => {
  const { title, published, imagesCollection, post: postContent } = post;
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
        return (
          <ContentfulImg>
            <RichTextAsset
              id={node.data.target.sys.id}
              assets={imagesCollection.items}
            />
          </ContentfulImg>
        );
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
        return (
          <CodeBlock>
            <CodeSnippet
              id={node.data.target.sys.id}
              markdown={postContent.links.entries.block}
            />
          </CodeBlock>
        );
      },
      [INLINES.ENTRY_HYPERLINK]: (node: any, children: any) => {
        return (
          <>
            <RichTextEntry
              id={node.data.target.sys.id}
              entries={postContent.links.entries.hyperlink}
              child={children[0]}
            />
          </>
        );
      },
    },
  };

  return (
    <>
      {/* <SEO title={title} description={previewText} /> */}
      <Wrapper>
        <BlogTitle>{title}</BlogTitle>
        <ContentWrapper>
          <UpdatedAt>
            Date: {format(new Date(published), "MM/dd/yyyy")}
          </UpdatedAt>
          <Content>
            {postContent &&
              documentToReactComponents(postContent.json, options)}
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
  const data = await getPost(params.slug, preview);
  return {
    props: {
      preview,
      post: data ?? null,
    },
  };
};

export async function getStaticPaths() {
  const allPosts: BlogProps[] = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/blog/${slug}`) ?? [],
    fallback: false,
  };
}
