import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { NextPage } from "next";
import { ProjectProps } from ".";
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

interface Props {
  post: ProjectProps;
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
    imagesCollection,
  } = post;
  const options = {
    renderNode: {
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
            {documentToReactComponents(description.json, options)}
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
                {technology.map((tag, index) => (
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
  };
};

export async function getStaticPaths() {
  const allProjects = await getAllProjectsWithSlug();
  return {
    paths: allProjects?.map(({ fields }) => `/projects/${fields.slug}`),
    fallback: false,
  };
};
