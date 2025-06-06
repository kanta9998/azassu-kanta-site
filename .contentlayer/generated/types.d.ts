// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Author = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Author'
  /** The name of the author */
  name: string
  /** The avatar of the author */
  avatar?: string | undefined
  /** The occupation of the author */
  occupation?: string | undefined
  /** The company of the author */
  company?: string | undefined
  /** The email of the author */
  email?: string | undefined
  /** The twitter handle of the author */
  twitter?: string | undefined
  /** The linkedin profile of the author */
  linkedin?: string | undefined
  /** The github profile of the author */
  github?: string | undefined
  /** The TikTok profile of the author */
  tiktok?: string | undefined
  /** The YouTube channel of the author */
  youtube?: string | undefined
  /** The Instagram profile of the author */
  instagram?: string | undefined
  /** The layout of the author page */
  layout?: string | undefined
  /** Markdown file body */
  body: Markdown
  slug: string
}

export type Portfolio = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Portfolio'
  /** The title of the portfolio item */
  title: string
  /** The date of the portfolio item */
  date: IsoDateTimeString
  /** Tags for the portfolio item */
  tags?: string[] | undefined
  /** Whether the portfolio item is a draft */
  draft?: boolean | undefined
  /** A summary of the portfolio item */
  summary?: string | undefined
  /** Images for the portfolio item */
  images?: string[] | undefined
  /** The client for the portfolio item */
  client?: string | undefined
  /** The category of the portfolio item */
  category?: string | undefined
  /** MDX file body */
  body: MDX
  url: string
  slug: string
}  

/** Nested types */
  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Author | Portfolio
export type DocumentTypeNames = 'Author' | 'Portfolio'

export type NestedTypes = never
export type NestedTypeNames = never

export type DataExports = {
  allDocuments: DocumentTypes[]
  allAuthors: Author[]
  allPortfolios: Portfolio[]
}


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
  dataExports: DataExports
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Author: Author
  Portfolio: Portfolio
}

export type NestedTypeMap = {

}

 