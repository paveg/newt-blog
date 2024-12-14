import { fetchArticleBySlug, fetchArticles } from '@/lib/newt'
import type { Metadata } from 'next'

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const articles = await fetchArticles()

  return articles.map((article) => ({
    slug: article.slug,
  }))
}
export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  const article = await fetchArticleBySlug(slug)

  return {
    title: article?.title,
    description: 'An article detail page',
  }
}

export default async function Article({ params }: Props) {
  const { slug } = params
  const article = await fetchArticleBySlug(slug)

  if (!article) return

  return (
    <main>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.body }} />
    </main>
  )
}
