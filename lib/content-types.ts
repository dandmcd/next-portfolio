import type { EntryFieldTypes } from "contentful";

export type AssetProps = {
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
    };
  };
};
export interface TypeBlogFields {
  entryTitle?: string;
  heroTitle?: string;
  metaDescription?: EntryFieldTypes.Text;
  pageNumberText?: string;
  icons?: TypeIconsFields[];
}

export interface TypeButtonOrLinkFields {
  fields: {
  entryTitle?: string;
  buttonOrLinkText?: string;
  elementType?: string[];
  link?: string;
  openInNewTab?: EntryFieldTypes.Boolean;
}
}

export interface TypeCodeSnippetsFields {
  codeSnippet?: EntryFieldTypes.Text;
}

export interface TypeContactPageFields {
  entryTitle?: string;
  heroTitle?: string;
  metaDescription?: EntryFieldTypes.Text;
  icons?: TypeIconsFields[];
  formHeader?: string;
  formNameText?: string;
  formEmailText?: string;
  formMessageText?: string;
  sendButton?: TypeButtonOrLinkFields;
  skillHeader?: string;
  skillSection1Text?: string;
  skillList1?: string[];
  skillSection2Text?: string;
  skillList2?: string[];
  skillSection3Text?: string;
  skillList3?: string[];
}

export interface TypeDmPortfolioBlogFields {
  fields: {
  title: string;
  post: EntryFieldTypes.RichText;
  images: AssetProps[];
  featured: EntryFieldTypes.Boolean;
  previewText: string;
  published: EntryFieldTypes.Date;
  location?: EntryFieldTypes.Location;
  slug: string;
  codeSnippet?: EntryFieldTypes.Text;
  },
  sys: {
    id: string;
    updatedAt: string;
  }
}

export interface TypeDmPortfolioProjectsFields {
  fields: {
  title: string;
  description: EntryFieldTypes.RichText;
  preview: string;
  technology: string[];
  images: AssetProps[];
  featured: EntryFieldTypes.Boolean;
  slug: string;
  githubLink?: string;
  demoLink?: string;
  };
}

export interface TypeHomeFields {
  entryTitle?: string;
  heroTitle?: string;
  metaDescription?: EntryFieldTypes.Text;
  subtitles?: string[];
  icons?: TypeIconsFields[];
  profileImage?: AssetProps;
  bio?: EntryFieldTypes.RichText;
  latestBlogText?: string;
  ctaButton?: TypeButtonOrLinkFields;
}

export interface TypeIconsFields {
  fields: {
  entryTitle?: string;
  icon?: AssetProps;
  iconText?: string;
  link?: TypeButtonOrLinkFields;
}
}

export interface TypeMenuFields {
  entryTitle?: string;
  links?: TypeButtonOrLinkFields[];
}

export interface TypeSingleBlogPageFields {
  blogPostTitle?: string;
  slug?: string;
  blogPost?: EntryFieldTypes.RichText;
  featuredImage?: AssetProps;
  previewText?: EntryFieldTypes.Text;
  goBackText?: string;
}

