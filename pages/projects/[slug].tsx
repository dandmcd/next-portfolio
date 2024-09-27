import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import { NextPage } from "next";
import HeadSeo from "../../components/HeadSeo";
import { RichTextAsset } from "../../components/rich-text-asset";
import { getAllProjectsWithSlug, getProject } from "../../lib/api";
import siteMetadata from "../../lib/siteMetadata";
import {
  ContentfulHeading,
  ContentfulImg,
  ContentfulP,
  ContentSide,
  DemoLink,
  GitLink,
  Grid,
  PackageBox,
  Preview,
  ProjectPageContainer,
  ProjectTitle,
  SideBar,
  Tag,
  TagLine,
  TagList,
  TechTags,
  ViewButtons,
} from "../../styles/projectsstyle";
import { TypeDmPortfolioProjectsFields } from "../../lib/content-types";

interface Props {
  post: TypeDmPortfolioProjectsFields;
}

const ProjectPage: NextPage<Props> = ({ post }) => {
  const {
    title,
    slug,
    description,
    technology,
    preview,
    githubLink,
    demoLink,
  } = post?.fields;
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const fields = node.data.target.fields;
        return (
          <ContentfulImg>
            <RichTextAsset fields={fields} />
          </ContentfulImg>
        );
      },
      [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
        <ContentfulHeading>{children}</ContentfulHeading>
      ),
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
        <ContentfulP>{children}</ContentfulP>
      ),
    },
  };
  return (
    <>
      <HeadSeo
        title={`${title} | ${siteMetadata.title} `}
        description={preview}
        canonicalUrl={`${siteMetadata.siteUrl}/projects/${slug}`}
      />
      <ProjectPageContainer>
        <Grid>
          <ContentSide>
            {documentToReactComponents(description as unknown as Document, options)}
          </ContentSide>
          <SideBar>
            <div>
              <ProjectTitle>{title}</ProjectTitle>
              <Preview>{preview}</Preview>
              <ViewButtons>
                <a href={githubLink} rel="noopener noreferrer" target="_blank">
                  <GitLink>View Github</GitLink>
                </a>
                <a href={demoLink} rel="noopener noreferrer" target="_blank">
                  <DemoLink>See Live App</DemoLink>
                </a>
              </ViewButtons>
            </div>

            <TechTags>
              <PackageBox>Tech Stack:</PackageBox>
              <TagList>
                {technology && technology.map((tag, index) => (
                  <div key={index}>
                    <Tag key={tag}>
                      {tag}
                    </Tag>
                    <TagLine />
                  </div>
                ))}
              </TagList>
            </TechTags>
          </SideBar>
        </Grid>
      </ProjectPageContainer>
    </>
  );
};

export default ProjectPage;

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
  const data = await getProject(params.slug);
  return {
    props: {
      preview,
      post: data ?? null,
    },
    revalidate: 300,
  };
};

export async function getStaticPaths() {
  const allProjects = await getAllProjectsWithSlug();
  return {
    paths: allProjects.map((project) => `/projects/${project.fields.slug}`),
    fallback: false,
  };
};
