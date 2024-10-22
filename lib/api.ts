import { createClient } from 'contentful';
import { Config } from './pagination';
import { TypeHomeFields } from './content-types';

if (
  !process.env.CONTENTFUL_SPACE_ID ||
  !process.env.CONTENTFUL_ACCESS_TOKEN ||
  !process.env.CONTENTFUL_ENVIRONMENT
) {
  throw new Error("Contentful configuration error.");
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.CONTENTFUL_ENVIRONMENT,
});

export const getPageContent = async (
  entryId: string,
): Promise<TypeHomeFields> => {
  const content = await client.getEntry(entryId, {
    include: 10,
  });

  return content.fields;
};

export async function getTotalBlogPosts(): Promise<number> {
  const response = await client.getEntries({
    content_type: 'dmPortfolioBlog',
    select: ['sys.id'],
  });
  return response.total;
}

export async function getMostRecentBlogPost() {
  const response = await client.getEntries({
    content_type: 'dmPortfolioBlog',
    'fields.slug[exists]': true,
    limit: 1,
    order: ['-fields.published'],
  });
  return response?.items[0];
}

export async function getPost(
  slug: string,
) {
  const response = await client.getEntries({
    content_type: 'dmPortfolioBlog',
    'fields.slug': slug,
    limit: 1,
    include: 10,
  });
  return response.items[0];
}

export async function getAllPostsWithSlug() {
  const response = await client.getEntries({
    content_type: 'dmPortfolioBlog',
    'fields.slug[exists]': true,
    order: ['fields.slug'],
  });
  return response.items;
}

export async function getPaginatedPostSummaries(
  page: number
) {
  const pageSize = Config.pagination.pageSize;
  const skip = (page - 1) * pageSize;

  const response = await client.getEntries({
    content_type: 'dmPortfolioBlog',
    limit: pageSize,
    skip: skip,
    order: ['-fields.published'],
  });

  return response;
}

export async function getAllProjectsWithSlug() {
  const response = await client.getEntries({
    content_type: 'dmPortfolioProjects',
    'fields.slug[exists]': true,
    order: ['fields.slug'],
  });
  return response.items;
}

export async function getAllProjects() {
  const response = await client.getEntries({
    content_type: 'dmPortfolioProjects',
    order: ['-sys.createdAt'],
  });
  return response.items;
}

export async function getProject(
  slug: string,
) {
  const response = await client.getEntries({
    content_type: 'dmPortfolioProjects',
    'fields.slug': slug,
    limit: 1,
  });
  return response.items[0];
}