import { Sample } from '@/components/sample'
import { fetchArticles } from '@/lib/newt'
import Link from 'next/link'

export default async function Home() {
  const articles = await fetchArticles()

  return (
    <div>
      <main>
        <ul>
          {articles.map((article) => {
            return (
              <li key={article._id}>
                <Link href={`/articles/${article.slug}`}>{article.title}</Link>
              </li>
            )
          })}
        </ul>
      </main>
      <footer />
    </div>
  )
}
