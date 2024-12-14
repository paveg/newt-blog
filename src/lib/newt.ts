import 'server-only'
import type { Article } from '@/types/newt/article'
import type { Author } from '@/types/newt/author'
import type { Tag } from '@/types/newt/tag'
import { createClient } from 'newt-client-js'
import { cache } from 'react'

const articleAttrs = ['_id', '_sys', 'title', 'slug', 'body', 'author', 'tags']
const authorAttrs = ['_id', 'fullName', 'slug', 'biography', 'profileImage']
const tagAttrs = ['_id', 'name', 'slug']

const client = createClient({
  spaceUid: `${process.env.NEWT_SPACE_UID}`,
  token: `${process.env.NEWT_CDN_API_TOKEN}`,
  apiType: 'cdn',
})

export const fetchArticles = cache(async () => {
  const { items } = await client.getContents<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      select: articleAttrs,
    },
  })

  return items
})

export const fetchAuthors = cache(async () => {
  const { items } = await client.getContents<Author>({
    appUid: 'blog',
    modelUid: 'author',
    query: {
      select: authorAttrs,
    },
  })

  return items
})

export const fetchTags = cache(async () => {
  const { items } = await client.getContents<Tag>({
    appUid: 'blog',
    modelUid: 'tag',
    query: {
      select: tagAttrs,
    },
  })

  return items
})

export const fetchArticleBySlug = cache(async (slug: string) => {
  const article = await client.getFirstContent<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      slug,
      select: articleAttrs,
    },
  })

  return article
})

export const fetchAuthorBySlug = cache(async (slug: string) => {
  const author = await client.getFirstContent<Author>({
    appUid: 'blog',
    modelUid: 'author',
    query: {
      slug,
      select: authorAttrs,
    },
  })

  return author
})

export const fetchTagBySlug = cache(async (slug: string) => {
  const tag = await client.getFirstContent<Tag>({
    appUid: 'blog',
    modelUid: 'tag',
    query: {
      slug,
      select: tagAttrs,
    },
  })

  return tag
})
