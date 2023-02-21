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

      <div className="mt-8 mb-10 sm:mt-40 divide-y divide-gray-200 dark:divide-gray-700">
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
            <div className="flex flex-col pr-0 sm:pr-8">
              <p className="mb-2 pt-12 py-5 sm:border-b sm:border-gray-300 sm:dark:border-gray-700 text-center sm:text-left text-3xl font-bold text-black dark:text-white sm:text-4xl">
                Hi 👋, I'm Yevhen 
              </p>
              <p className="mb-3 text-lg">
                Welcome to my blog <span className='font-bold'>YY Automation</span>.
                I specialize in setting up testing processes, building automation frameworks from scratch, and improving product quality.
                If you're looking for help with test automation, process improvement, or anything related to software testing, I'm here to help. 
              </p>

              <div className="mb-3 flex space-x-4">
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
