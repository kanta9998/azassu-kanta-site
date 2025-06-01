import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Author = defineDocumentType(() => ({
  name: 'Author',
  filePathPattern: `authors/**/*.md`,
  fields: {
    name: {
      type: 'string',
      description: 'The name of the author',
      required: true,
    },
    avatar: {
      type: 'string',
      description: 'The avatar of the author',
      required: false,
    },
    occupation: {
      type: 'string',
      description: 'The occupation of the author',
      required: false,
    },
    company: {
      type: 'string',
      description: 'The company of the author',
      required: false,
    },
    email: {
      type: 'string',
      description: 'The email of the author',
      required: false,
    },
    twitter: {
      type: 'string',
      description: 'The twitter handle of the author',
      required: false,
    },
    linkedin: {
      type: 'string',
      description: 'The linkedin profile of the author',
      required: false,
    },
    github: {
      type: 'string',
      description: 'The github profile of the author',
      required: false,
    },
    tiktok: {
      type: 'string',
      description: 'The TikTok profile of the author',
      required: false,
    },
    youtube: {
      type: 'string',
      description: 'The YouTube channel of the author',
      required: false,
    },
    instagram: {
      type: 'string',
      description: 'The Instagram profile of the author',
      required: false,
    },
    layout: {
      type: 'string',
      description: 'The layout of the author page',
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/^authors\//, ''),
    },
  },
}))

export const Portfolio = defineDocumentType(() => ({
  name: 'Portfolio',
  filePathPattern: `portfolio/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the portfolio item',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the portfolio item',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'Tags for the portfolio item',
      required: false,
    },
    draft: {
      type: 'boolean',
      description: 'Whether the portfolio item is a draft',
      required: false,
    },
    summary: {
      type: 'string',
      description: 'A summary of the portfolio item',
      required: false,
    },
    images: {
      type: 'list',
      of: { type: 'string' },
      description: 'Images for the portfolio item',
      required: false,
    },
    client: {
      type: 'string',
      description: 'The client for the portfolio item',
      required: false,
    },
    category: {
      type: 'string',
      description: 'The category of the portfolio item',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/portfolio/${doc._raw.flattenedPath.replace(/^portfolio\//, '')}`,
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/^portfolio\//, ''),
    },
  },
}))

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Author, Portfolio],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
}) 