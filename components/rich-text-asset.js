import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Img, ImgCaption } from "../styles/projectsstyle";

export function RichTextAsset({ id, assets }) {
  const asset = assets?.find((asset) => asset.sys.id === id.toString());
  if (asset?.url) {
    return (
      <>
        <Img
          src={asset.url}
          width={asset.width}
          height={asset.height}
          alt={asset.description}
        />
        <ImgCaption>{asset.title}</ImgCaption>
      </>
    );
  }

  return null;
}

export function RichTextEntry({ id, entries, child }) {
  const entry = entries?.find((entry) => entry.sys.id === id.toString());
  if (entry?.slug) {
    return (
      <>
        <Link href={`/blog/${entry.slug}`}>{child}</Link>
      </>
    );
  }

  return null;
}
