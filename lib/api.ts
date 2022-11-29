import {
  TypeDmPortfolioBlogFields,
  TypeDmPortfolioProjectsFields,
} from "./content-types";
import { Config } from "./pagination";

const PROJECT_FIELDS = `
slug
title
featured
preview
technology
githubLink
demoLink
description {
  json
}
imagesCollection {
  items {
    sys {
      id
    }
    url
    title
    width
    height
  }
}
`;

const BLOG_FIELDS = `
items {
  post {
    json
  }
  slug
  title
  featured
  previewText
  published
  codeSnippet
  imagesCollection {
    items {
      sys {
        id
      }
      url
      title
      width
      height
    }
  }
}
`;

const SINGLE_BLOG_FIELDS = `
items {
  post {
    json
    links {
      entries {
        block {
          __typename
          ... on CodeSnippets {
            codeSnippet
          }
          sys {
            id
          }
        }
        hyperlink {
          __typename
          ... on DmPortfolioBlog {
            slug
          }
          ... on DmPortfolioProjects {
            slug
          }
          sys {
            id
          }
        }
      }
      assets {
        hyperlink {
          sys {
            id
          }
          url
        }
        block {
          sys {
            id
          }
          url
        }
      }
    }
  }
  slug
  title
  featured
  previewText
  published
  imagesCollection {
    items {
      sys {
        id
      }
      url
      title
      width
      height
    }
  }
}
`;

async function fetchGraphQL(query: string, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

function extractPost(fetchResponse: any, collection: string) {
  return fetchResponse?.data?.[collection]?.items?.[0];
}

function extractPostEntries(fetchResponse: any, collection: string) {
  return fetchResponse?.data?.[collection]?.items;
}

export async function getoTotalBlogPosts() {
  const query = await fetchGraphQL(
    `
    query {
      dmPortfolioBlogCollection {
        total
      }
    }
    `
  );
  const totalPosts = query.data.dmPortfolioBlogCollection.total;
  return totalPosts;
}

export async function getMostRecentBlogPost() {
  const entries: TypeDmPortfolioBlogFields = await fetchGraphQL(
    `query {
      dmPortfolioBlogCollection(where: { slug_exists: true }, limit: 1, order: published_DESC) {
          ${BLOG_FIELDS}
        
      }
    }`
  );
  return extractPost(entries, "dmPortfolioBlogCollection");
}

export async function getPost(slug: string, preview: boolean) {
  const entry = await fetchGraphQL(
    `query {
      dmPortfolioBlogCollection(where: { slug: "${slug}" }, limit: 1, preview: ${
      preview ? "true" : "false"
    }) {
          ${SINGLE_BLOG_FIELDS}
      }
    }`,
    preview
  );
  return extractPost(entry, "dmPortfolioBlogCollection");
}

export async function getAllPostsWithSlug() {
  const entries: TypeDmPortfolioBlogFields = await fetchGraphQL(
    `query {
      dmPortfolioBlogCollection(where: { slug_exists: true }, order: slug_DESC) {
          ${BLOG_FIELDS}
        
      }
    }`
  );
  return extractPostEntries(entries, "dmPortfolioBlogCollection");
}

export async function getPaginatedPostSummaries(page: number) {
  const skipMultiplier = page === 1 ? 0 : page - 1;
  const skip =
    skipMultiplier > 0 ? Config.pagination.pageSize * skipMultiplier : 0;
  const entries = await fetchGraphQL(
    `query {
        dmPortfolioBlogCollection(limit: ${Config.pagination.pageSize}, skip: ${skip}, order: published_DESC) {
          total
          ${BLOG_FIELDS}
        }
      }`
  );
  return entries?.data?.dmPortfolioBlogCollection;
}

export async function getAllProjectsWithSlug() {
  const entries: TypeDmPortfolioProjectsFields = await fetchGraphQL(
    `query {
      dmPortfolioProjectsCollection(where: { slug_exists: true }, order: slug_DESC) {
        items {
          ${PROJECT_FIELDS}
        }
      }
    }`
  );
  return extractPostEntries(entries, "dmPortfolioProjectsCollection");
}

export async function getAllProjects(preview: boolean) {
  const entries: TypeDmPortfolioProjectsFields = await fetchGraphQL(
    `query {
      dmPortfolioProjectsCollection(order: slug_DESC, preview: ${
        preview ? "true" : "false"
      }) {
        items {
          ${PROJECT_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractPostEntries(entries, "dmPortfolioProjectsCollection");
}

export async function getProject(slug: string, preview: boolean) {
  const entry = await fetchGraphQL(
    `query {
      dmPortfolioProjectsCollection(where: { slug: "${slug}" }, preview: ${
      preview ? "true" : "false"
    }, limit: 1) {
        items {
          ${PROJECT_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractPost(entry, "dmPortfolioProjectsCollection");
}
