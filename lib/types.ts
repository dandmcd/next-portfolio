import * as Contentful from "contentful";
import {
  TypeDmPortfolioBlogFields,
  TypeDmPortfolioProjectsFields,
} from "./content-types";

export * from "./content-types";
export type TypePage = Contentful.Entry<
  TypeDmPortfolioBlogFields | TypeDmPortfolioProjectsFields
>;
