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
        <div className="space-y-2 pt-8 md:space-y-5">
          <WelcomeGradient />

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe cupiditate modi
          dolores quod sint facilis odit a ab, est, omnis iure reiciendis voluptatem rerum quis eos
          aperiam quisquam fugit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
          enim deleniti, dolor suscipit quae incidunt quis, dolore aut saepe fuga praesentium
          temporibus tempore itaque voluptatibus quo dicta ab, quos dolorum. Perferendis tenetur id
          vero magni est enim facere quos impedit eaque, ullam ratione incidunt necessitatibus eum
          deserunt eos fuga totam delectus voluptates rerum omnis nam molestiae ex molestias. Earum,
          magni.
          <div className="text-lg text-gray-600 dark:text-gray-400">Some text</div>
        </div>

        {/* TODO: re-enable once newsletter is configured  */}
        {/* {siteMetadata.newsletter.provider && (
            <div className="flex items-center justify-center pt-4">
              <NewsletterForm />
            </div>
          )} */}
      </div>
      <FeaturedPosts posts={posts} />
    </>
  )
}
