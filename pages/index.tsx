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
import Link from '@/components/Link'
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

      <div className="mt-8 mb-4 sm:mt-20 sm:mb-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:flex-row-reverse">
          <div className="mx-auto">
            <Image
              src={'/static/images/avatar.png'}
              alt={'yy-automation'}
              width="264"
              height="264"
              className="rounded-full"
            />
          </div>
          <div className="mt-0 flex-1 sm:mt-14">
            <div className="flex flex-col pr-0 sm:pr-8">
              <p className="mb-2 pt-3 pb-3 text-center text-3xl font-bold text-black dark:text-white sm:border-b sm:border-gray-300 sm:text-left sm:text-4xl sm:dark:border-gray-700">
                Hi 👋, I'm Yevhen
              </p>
              <p className="prose text-gray-500 dark:text-gray-400">
                Welcome to my website{' '}
                <strong className="text-gray-900 dark:text-gray-100">YY Automation</strong>.
                <br />I specialize on test automation using Python and TypeScript, setting up
                testing processes, building automation frameworks from scratch, and improving
                product quality.
              </p>

              <div className="mt-3 text-base font-medium leading-6">
                <Link
                  href="/about"
                  className="text-primary-500 hover:text-primary-700 dark:hover:text-primary-400"
                >
                  Read more &rarr;
                </Link>
              </div>

              {/* <div className="mb-3 flex space-x-4 align-bottom align-text-bottom">
                <span className="text-2xl font-bold text-emerald-500">Contant me: </span>
                <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
                <SocialIcon kind="github" href={siteMetadata.github} size={6} />
                <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
                <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
              </div> */}
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
