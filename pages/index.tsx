import { PageSEO } from '@/components/SEO'
import { FeaturedPosts } from '@/components/homepage/FeaturedPosts'
import { WelcomeGradient } from '@/components/homepage/WelcomeGradient'
import siteMetadata from '@/data/siteMetadata'
import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer'
import { NewsletterForm } from 'pliny/ui/NewsletterForm'
import { allBlogs } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'
import { BlogFrontMatter } from 'types/mdx'

export const getStaticProps = async () => {
  const sortedPosts = sortedBlogPost(allBlogs) as Blog[]
  const posts = allCoreContent(sortedPosts)

  return { props: { posts } }
}

export default function Home({ posts }: { posts: BlogFrontMatter[] }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <div className="md:pr-8 xl:col-span-2">
            <WelcomeGradient />

            <div className="text-lg leading-8 text-gray-600 dark:text-gray-400">Some text</div>
          </div>

          {/* TODO: re-enable once newsletter is configured  */}
          {/* {siteMetadata.newsletter.provider && (
            <div className="flex items-center justify-center pt-4">
              <NewsletterForm />
            </div>
          )} */}
        </div>
      </div>
      <FeaturedPosts posts={posts} />
    </>
  )
}
