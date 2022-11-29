import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";

export interface TypeCodeSnippetsFields {
  codeSnippet?: Contentful.EntryFields.Text;
}

export type TypeCodeSnippets = Contentful.Entry<TypeCodeSnippetsFields>;

export interface TypeDmPortfolioBlogFields {
  title: Contentful.EntryFields.Symbol;
  post: CFRichTextTypes.Block | CFRichTextTypes.Inline;
  images: Contentful.Asset[];
  featured: Contentful.EntryFields.Boolean;
  previewText: Contentful.EntryFields.Text;
  published: Contentful.EntryFields.Date;
  location?: Contentful.EntryFields.Location;
  slug: Contentful.EntryFields.Symbol;
  codeSnippet?: Contentful.EntryFields.Text;
}

export type TypeDmPortfolioBlog = Contentful.Entry<TypeDmPortfolioBlogFields>;

export interface TypeDmPortfolioProjectsFields {
  title: Contentful.EntryFields.Symbol;
  description: CFRichTextTypes.Block | CFRichTextTypes.Inline;
  preview: Contentful.EntryFields.Text;
  technology: Contentful.EntryFields.Symbol[];
  images: Contentful.Asset[];
  featured: Contentful.EntryFields.Boolean;
  slug: Contentful.EntryFields.Symbol;
  githubLink?: Contentful.EntryFields.Symbol;
  demoLink?: Contentful.EntryFields.Symbol;
}

export type TypeDmPortfolioProjects =
  Contentful.Entry<TypeDmPortfolioProjectsFields>;
