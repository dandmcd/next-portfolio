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
import { TypeDmPortfolioProjectsFields } from "../../lib/content-types";

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
  allProjects: TypeDmPortfolioProjectsFields[];
}

const Projects: NextPage<Props> = ({ allProjects }) => {
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
            return project.fields.featured ? (
              <FeaturedProject key={project.fields.slug} project={project} />
            ) : null;
          })}
        </FeaturedProjectContainer>
        <ProjectsContainer>
          {allProjects.map((project) => {
            return !project.fields.featured ? (
              <Project key={project.fields.slug} project={project} />
            ) : null;
          })}
        </ProjectsContainer>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allProjects = (await getAllProjects()) ?? [];
  return {
    props: { allProjects: allProjects },
    revalidate: 300,
  };
};

export default Projects;
