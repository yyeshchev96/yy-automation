import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'

export default function FourZeroFour() {
  return (
    <>
      <PageSEO title="Page Not Found" description="Sorry we couldn't find this page :(" />
      <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
            404
          </h1>
        </div>
        <div className="max-w-md">
          <p className="mb-4 text-2xl font-bold leading-normal md:text-2xl">Oops! Wrong turn 🚷</p>
          <p className="mb-8">
            But dont worry, you can find plenty of other things on my homepage 🚀
          </p>
          <Link
            href="/"
            className="focus:shadow-outline-primary inline rounded-lg border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-primary-500 focus:outline-none dark:hover:bg-primary-500"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </>
  )
}
