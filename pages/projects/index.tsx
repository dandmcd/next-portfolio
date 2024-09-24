import { GetStaticProps, NextPage } from "next";
import FeaturedProject from "../../components/FeaturedProject/FeaturedProject";
import Project from "../../components/Project/Project";
import { getAllProjects } from "../../lib/api";
import { CommonTitle } from "../../styles/styledCommon";
import {
  Container,
  FeaturedProjectContainer,
  ProjectsContainer,
} from "../../styles/projectsstyle";
import HeadSeo from "../../components/HeadSeo";
import siteMetadata from "../../lib/siteMetadata";

export interface ProjectProps {
  title: string;
  preview: string;
  slug: string;
  featured: boolean;
  description: any;
  technology: string[];
  githubLink: string;
  demoLink: string;
  imagesCollection: {
    items: {
      url: string;
    }[];
  };
}

interface Props {
  preview: boolean;
  allProjects: ProjectProps[];
}

const Projects: NextPage<Props> = ({ preview, allProjects }) => {
  return (
    <>
      <HeadSeo
        title={`Projects | ${siteMetadata.title} `}
        description={siteMetadata.description}
        canonicalUrl={`${siteMetadata.siteUrl}/projects`}
      />
      <Container>
        <CommonTitle>Daniel&apos;s Projects</CommonTitle>
        <FeaturedProjectContainer>
          {allProjects.map((project) => {
            return project.featured ? (
              <FeaturedProject key={project.slug} project={project} />
            ) : null;
          })}
        </FeaturedProjectContainer>
        <ProjectsContainer>
          {allProjects.map((project) => {
            return !project.featured ? (
              <Project key={project.slug} project={project} />
            ) : null;
          })}
        </ProjectsContainer>
      </Container>
    </>
  );
};

export async function getStaticPaths() {
  const allProjects = (await getAllProjects());
  return {
    props: { allProjects: allProjects },
  };
};

export default Projects;
