import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  return (
    <header className="backdrop-blur-none backdrop-filter-none firefox:bg-opacity-100 sticky dark:firefox:bg-opacity-100 top-0 z-30 flex items-center justify-between sm:backdrop-blur-sm bg-white bg-opacity-80 py-3 sm:backdrop-saturate-200 sm:backdrop-filter dark:bg-gray-900 dark:bg-opacity-30">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="h-6 text-2xl font-semibold">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="rounded p-1 font-medium text-gray-900 transition duration-300 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:p-3"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
