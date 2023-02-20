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
            <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe cupiditate modi dolores quod sint facilis odit a ab, est, omnis iure reiciendis voluptatem rerum quis eos aperiam quisquam fugit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque enim deleniti, dolor suscipit quae incidunt quis, dolore aut saepe fuga praesentium temporibus tempore itaque voluptatibus quo dicta ab, quos dolorum.
            Perferendis tenetur id vero magni est enim facere quos impedit eaque, ullam ratione incidunt necessitatibus eum deserunt eos fuga totam delectus voluptates rerum omnis nam molestiae ex molestias. Earum, magni.
            Ab rem doloremque iure nesciunt perferendis, reiciendis molestiae veniam provident vero ut sit magnam tempore quo nisi delectus omnis corporis sint cum autem corrupti ducimus quod! Esse ad illo error!
            Eum eos vel nobis tempore laudantium vitae, a repellat similique, omnis possimus modi pariatur ea consectetur temporibus eius necessitatibus rem voluptatem esse culpa magni reiciendis non voluptatum? Eius, fugit eos.
            Assumenda distinctio officiis inventore fugit at laborum voluptate labore facilis, perspiciatis, quasi iure delectus aspernatur laboriosam, repudiandae numquam possimus maxime libero eligendi. Aut deleniti esse, sequi eligendi eaque debitis repellendus.
            Repellendus quae nemo odit excepturi vitae expedita dolor eveniet enim? Rerum recusandae, harum atque impedit neque inventore delectus ipsam illum, sunt quos placeat labore cum repellendus maiores quo magni aperiam.
            Dolor eveniet nobis quaerat exercitationem fugiat animi eligendi voluptatem, ea sit eum dolorum alias cumque repellendus ducimus obcaecati consectetur similique voluptatibus enim, excepturi, fugit molestiae hic aspernatur nesciunt? Obcaecati, adipisci?
            Aspernatur provident totam at quia magnam cupiditate odit natus repudiandae. Sit laudantium obcaecati aliquam cum in! Earum corporis, dignissimos ratione ex dolorem aperiam voluptatum impedit ad culpa, reprehenderit recusandae nobis.
            Eum sunt praesentium illum placeat, atque quia et quas quae a natus earum sequi, cupiditate, ab quasi distinctio doloribus hic! Nulla hic aperiam pariatur est saepe sequi in deserunt provident.
            Nulla magni molestiae delectus quod debitis, corporis dolore nesciunt? Reiciendis similique tempore necessitatibus quam, earum voluptates deserunt a suscipit excepturi atque itaque nam et ducimus architecto soluta laboriosam quibusdam dicta.
            Perspiciatis ad qui nobis magnam, similique eligendi consequuntur temporibus maxime distinctio natus in ducimus corporis officiis? Quidem aut reprehenderit molestias vero cupiditate, sunt ullam quas eum iure consectetur harum eius?
            Facere perspiciatis at magnam voluptates dolore deleniti accusantium obcaecati ipsam doloremque perferendis vel quam id distinctio autem molestiae sint labore hic ad ratione, voluptatem ex? Doloribus possimus vitae totam quasi?
            Perferendis doloremque temporibus est deleniti perspiciatis voluptatem delectus assumenda, adipisci pariatur praesentium fuga iste. Dignissimos natus libero dolorem autem, delectus possimus saepe inventore, labore, omnis reprehenderit nobis repellat ducimus atque!
            Nesciunt adipisci laboriosam molestias deleniti velit, ex ratione repellat nostrum facilis laborum, iure neque, debitis ducimus laudantium reiciendis ipsum vitae dignissimos. Iste tempore magnam sunt ducimus vero accusantium earum officiis?
            Dolorum distinctio hic illum tempore quidem maiores aliquam reiciendis corrupti, enim autem, natus quo eveniet rem odit nesciunt deleniti vitae dolores delectus! Doloremque eaque perferendis odio, autem est mollitia cumque.
            Enim reiciendis repellat adipisci, voluptatum atque esse nisi corporis cum itaque sunt explicabo quae? Voluptatum consectetur cupiditate ut, expedita soluta, alias porro ratione incidunt facilis rem non, exercitationem minima dolores.
            Consectetur harum totam incidunt at nulla, pariatur quo magnam! Praesentium voluptatibus dolor laboriosam distinctio laborum corrupti minus autem perferendis molestiae quod consequuntur esse aliquam eaque sequi, vel repudiandae officiis aut.
            Veritatis repellendus vel dignissimos illum totam mollitia assumenda. Harum culpa debitis odit vero, et assumenda. Dicta magni corrupti eos vel suscipit quam inventore, esse ab obcaecati unde. Consequuntur, suscipit porro.
            Aliquam cupiditate mollitia voluptate sint animi error ipsum officiis quibusdam. Expedita dignissimos impedit quam non excepturi cum quo delectus praesentium! At ipsum esse quod laboriosam odit minima nostrum obcaecati eos!
            Facilis voluptas fuga blanditiis officia quis officiis velit necessitatibus quae repellendus! Culpa molestiae itaque nulla iure quam repudiandae, quibusdam autem tenetur? Error cupiditate accusantium commodi earum voluptatem amet et ratione.

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
