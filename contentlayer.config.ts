import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files';
// @ts-ignore
import toc from 'markdown-toc';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import blurredImageDataRehypePlugin, { getBlurData } from './generate-blurred-images';

const GeneratedImageDataWithBlurredPlaceholder = defineNestedType(() => ({
  name: 'GeneratedImageData',
  fields: {
    blurDataURL: { type: 'string' },
    src: { type: 'string' },
    height: { type: 'number' },
    width: { type: 'number' },
    placeholder: { type: 'string' },
  },
}));

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  // bodyType: 'mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    lastUpdated: { type: 'date', required: false },
    excerpt: { type: 'string', required: true },
    cover: { type: 'string', required: false },
    coverCredits: { type: 'mdx', required: false },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: false,
    },
  },
  computedFields: {
    year: {
      type: 'number',
      resolve: ({ date }) => new Date(date).getFullYear(),
    },
    generatedCover: {
      type: 'nested',
      of: GeneratedImageDataWithBlurredPlaceholder,
      required: false,
      resolve: async ({ cover }) => {
        if (!cover) return undefined;
        const blurredData = await getBlurData(cover);
        if (!blurredData) return undefined;
        return {
          src: cover,
          blurDataURL: blurredData.blur64,
          size: blurredData.size,
          // height: blurredData.size.height,
          // width: blurredData.size.width,
          placeholder: 'blur',
        };
      },
    },
    readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
    shortHumanMonthAndDay: {
      type: 'string',
      resolve: ({ date }) => new Date(date).toLocaleString('en-US', { month: 'short', day: '2-digit' }),
    },
    longHumanDate: {
      type: 'string',
      resolve: ({ date }) => new Date(date).toLocaleString('en-US', { month: 'long', day: '2-digit', year: 'numeric' }),
    },
    toc: {
      type: 'json',
      resolve: ({ body }) => {
        const headings = toc(body.raw, {});
        return {
          headings: headings.json,
          highest: headings.highest,
        };
      },
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx/, ''),
    },
  },
}));

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      blurredImageDataRehypePlugin,
      rehypeSlug,
      rehypePrism,
      [rehypeAutolinkHeadings, { properties: { className: ['hash-anchor'] } }],
    ],
  },
});
