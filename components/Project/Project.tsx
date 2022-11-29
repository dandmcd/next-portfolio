import { NextComponentType, NextPage } from "next";
import Link from "next/link";
import React, { FC } from "react";
import { ProjectProps } from "../../pages/projects";
import {
  Figure,
  FigCaption,
  ProjectTitle,
  ProjectViewMore,
  ProjectImg,
  ProjectDescription,
} from "./style";

const Project = ({ project }: { project: ProjectProps }): JSX.Element => {
  const { title, slug, featured, preview, imagesCollection } = project;
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

export default Project;
