import { NextPage } from "next";
import Link from "next/link";
import React, { memo } from "react";
import { BlogProps } from "../../pages/blog";

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

interface Props {
  blog: BlogProps;
}

const BlogListing: NextPage<Props> = ({ blog }) => {
  const { slug, title, imagesCollection, previewText, updatedAt } = blog;
  const image = imagesCollection.items[0];
  return (
    <>
      <Grid>
        <ImgCell>
          <BlogImg as={BlogImg} src={image.url} fill alt="test" />
        </ImgCell>
        <TextFields>
          <Title>
            <Link href={`/blog/${slug}`}>{title}</Link>
          </Title>
          <UpdatedAt>{updatedAt}</UpdatedAt>
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
