import Link from "next/link";
import { Img, ImgCaption } from "../styles/projectsstyle";

export function RichTextAsset({ fields }) {
  const { file, title, description } = fields;

  if (file?.url) {
    return (
      <>
        <Img
          src={`https:${file.url}`}
          width={file.details.image.width}
          height={file.details.image.height}
          alt={description || title}
        />
        <ImgCaption>{title}</ImgCaption>
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
