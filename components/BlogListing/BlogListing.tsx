import { NextPage } from "next";
import Link from "next/link";
import React, { memo } from "react";
import { format } from "date-fns";

import {
  Grid,
  BlogImg,
  TextFields,
  Title,
  UpdatedAt,
  Preview,
  ViewMore,
  ImgCell,
} from "./style";
import { TypeDmPortfolioBlogFields } from "../../lib/content-types";

interface Props {
  blog: TypeDmPortfolioBlogFields;
}

const BlogListing: NextPage<Props> = ({ blog }) => {
  const { slug, title, images, previewText } = blog.fields;
  const { updatedAt } = blog.sys;
  
  const image = images[0];
  return (
    <>
      <Grid>
        <ImgCell>
          <BlogImg as={BlogImg} src={`https:${image.fields.file.url}`} fill alt="test" />
        </ImgCell>
        <TextFields>
          <Title>
            <Link href={`/blog/${slug}`}>{title}</Link>
          </Title>
          <UpdatedAt>{format(new Date(updatedAt), "MMMM do, yyyy")}</UpdatedAt>
          <Preview>{previewText}</Preview>
          <ViewMore>
            <Link href={`/blog/${slug}`}>View More</Link>
          </ViewMore>
        </TextFields>
      </Grid>
    </>
  );
};

export default memo(BlogListing);
