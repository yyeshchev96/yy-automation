import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import { BlogFrontMatter } from 'types/mdx'
import NoPostsFound from '../Posts'

const MAX_POSTS = 3

export function FeaturedPosts({ posts }: { posts: BlogFrontMatter[] }) {
  return (
    <div>
      <h1 className="my-4 mt-12 text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
        Latest in Blog:
      </h1>
      <ul className="flex flex-col gap-8 sm:flex-row">
        {!posts.length && <NoPostsFound />}
        {posts.slice(0, MAX_POSTS).map((post) => {
          const { slug, date, title, summary, tags } = post
          return (
            <li key={slug} className="w-full sm:w-1/3">
              {/* Post Card Container */}
              <article className="h-full scale-100 transform rounded-xl border border-gray-200 shadow-lg shadow-gray-300 duration-300 hover:scale-105 hover:border-primary-500 dark:border-gray-700 dark:shadow-gray-700 dark:hover:border-primary-700">
                {/* Content Container */}
                <div className="flex h-full flex-col justify-start p-3">
                  <Link href={`/blog/${slug}`}>
                    <h2 className="text-xl font-bold leading-8 tracking-tight">{title}</h2>
                  </Link>
                  <div>
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                  <Link href={`/blog/${slug}`}>
                    <div className="prose text-gray-500 dark:text-gray-400">{summary}</div>
                  </Link>
                </div>

                {/* <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    </dd>
                  </dl> */}
              </article>
            </li>
          )
        })}
      </ul>
      {posts.length > MAX_POSTS && (
        <div className="mt-8 flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-700 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </div>
  )
}
