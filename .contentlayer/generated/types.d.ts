// NOTE This file is auto-generated by the Contentlayer CLI

import type { Markdown, MDX } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

// export type Image = string
export type { Markdown, MDX }

/** Document types */
export type Post = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Post'
  title: string
  date: string
  lastUpdated: string | undefined
  excerpt: string
  cover: string | undefined
  coverCredits: MDX | undefined
  tags: string[] | undefined
  /** MDX file body */
  body: MDX
  year: number
  generatedCover: nested
  readingTime: json
  shortHumanMonthAndDay: string
  longHumanDate: string
  toc: json
  slug: string
}  

/** Nested types */
  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Post
export type DocumentTypeNames = 'Post'

export type NestedTypes = never
export type NestedTypeNames = never


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Post: Post
}

export type NestedTypeMap = {

}

 