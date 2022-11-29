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

const FeaturedProject = ({
  project,
}: {
  project: ProjectProps;
}): JSX.Element => {
  const { title, slug, preview, imagesCollection } = project;
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
              src={imagesCollection.items[0].url}
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
