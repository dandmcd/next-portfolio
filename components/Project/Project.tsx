import Link from "next/link";
import {
  Figure,
  FigCaption,
  ProjectTitle,
  ProjectViewMore,
  ProjectImg,
  ProjectDescription,
} from "./style";
import { TypeDmPortfolioProjectsFields } from "../../lib/content-types";

const Project = ({ project }: { project: TypeDmPortfolioProjectsFields }): React.JSX.Element => {
  const { title, slug, preview, images } = project.fields;

  return (
    <>
      <Link href={`/projects/${slug}`}>
        <Figure>
          <FigCaption>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectDescription>{preview}</ProjectDescription>
            <ProjectViewMore>View More</ProjectViewMore>
          </FigCaption>
          <div>
            <ProjectImg
              as={ProjectImg}
              src={`https:${images[0]?.fields?.file?.url}`}
              fill
              alt={title}
            />
          </div>
        </Figure>
      </Link>
    </>
  );
};

export default Project;
