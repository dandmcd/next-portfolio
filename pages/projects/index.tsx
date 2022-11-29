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
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allProjects: ProjectProps[] = (await getAllProjects(preview)) ?? [];
  return {
    props: { preview, allProjects: allProjects },
  };
};

export default Projects;
