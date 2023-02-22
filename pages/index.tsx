import { PageSEO } from '@/components/SEO'
import { FeaturedPosts } from '@/components/homepage/FeaturedPosts'
// import { WelcomeGradient } from '@/components/homepage/WelcomeGradient'
import siteMetadata from '@/data/siteMetadata'
import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer'
// import { NewsletterForm } from 'pliny/ui/NewsletterForm'
import { allAuthors, allBlogs } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'
import { BlogFrontMatter } from 'types/mdx'
import Image from '@/components/Image'
import SocialIcon from '@/components/social-icons'
// import About from './about'
// import PageTitle from '@/components/PageTitle'
// import GradientText from '@/components/GradientText'

export const getStaticProps = async () => {
  const sortedPosts = sortedBlogPost(allBlogs) as Blog[]
  const posts = allCoreContent(sortedPosts)

  return { props: { posts } }
}

export default function Home({ posts }: { posts: BlogFrontMatter[] }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <div className="mt-8 mb-10 divide-y divide-gray-200 dark:divide-gray-700 sm:mt-20">
        <div className="flex flex-col gap-8 sm:flex-row sm:flex-row-reverse">
          <div className="mx-auto">
            <Image
              src={'/static/images/avatar.png'}
              alt={'yy-automation'}
              width="240"
              height="240"
              className="h-60 w-60 rounded-full"
            />
          </div>
          <div className="flex-1">
            <div className="mb-10 flex flex-col pr-0 sm:pr-8">
              <p className="mb-2 py-5 pt-12 text-center text-3xl font-bold text-black dark:text-white sm:border-b sm:border-gray-300 sm:text-left sm:text-4xl sm:dark:border-gray-700">
                Hi 👋, I'm Yevhen
              </p>
              <p className="prose mb-3 font-sans text-gray-500 dark:text-gray-400">
                Welcome to my website{' '}
                <strong className="text-gray-900 dark:text-gray-100">YY Automation</strong>.
                <br />I specialize in test automation using{' '}
                <strong className="text-gray-900 dark:text-gray-100">Python</strong> and{' '}
                <strong className="text-gray-900 dark:text-gray-100">TypeScript</strong>, setting up
                testing processes, building automation frameworks from scratch, and improving
                product quality.
              </p>

              <div className="mb-3 flex space-x-4 align-bottom align-text-bottom">
                <span className="text-2xl font-bold text-emerald-500">Contant me: </span>
                <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
                <SocialIcon kind="github" href={siteMetadata.github} size={6} />
                <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
                <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
              </div>
            </div>
          </div>
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
