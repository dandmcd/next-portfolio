import Link from "next/link";
import { ProjectProps } from "../../pages/projects";

import {
  Figure,
  FigCaption,
  ProjectTitle,
  FeaturedSpan,
  ProjectViewMore,
  ProjectImg,
  ProjectDescription,
} from "./style";
import { TypeDmPortfolioProjectsFields } from "../../lib/content-types";

const FeaturedProject = ({
  project,
}: {
  project: TypeDmPortfolioProjectsFields;
}): JSX.Element => {
  const { title, slug, preview, images } = project.fields;
  return (
    <>
      <Link href={`/projects/${slug}`}>
        <Figure>
          <FigCaption>
            <ProjectTitle>
              <FeaturedSpan>Featured Project:</FeaturedSpan> {title}
            </ProjectTitle>
            <ProjectDescription>{preview}</ProjectDescription>
            <ProjectViewMore>View More</ProjectViewMore>
          </FigCaption>
          <div>
            <ProjectImg
              as={ProjectImg}
              src={`https:${images[0].fields.file.url}`}
              fill
              alt={title}
            />
          </div>
        </Figure>
      </Link>
    </>
  );
};

export default FeaturedProject;
