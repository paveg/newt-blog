import type { Author } from './author'
import type { Tag } from './tag'

export interface Article {
  _id: string
  _sys: {
    createdAt: string
    updatedAt: string
    firstPublishedAt: string
    publishedAt: string
  }
  title: string
  slug: string
  body: string
  author: Author
  tags: Tag[]
}
