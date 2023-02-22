import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import Image from './Image'
import ThemeSwitch from './ThemeSwitch'
import { useTheme } from 'next-themes'

const Header = () => {
  const { theme, resolvedTheme } = useTheme()

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b bg-white bg-opacity-100 py-3 backdrop-blur-none backdrop-filter-none dark:border-b dark:border-gray-700 dark:bg-gray-900 sm:border-none sm:border-gray-200 sm:bg-opacity-50 sm:backdrop-blur-sm sm:backdrop-saturate-200 sm:backdrop-filter sm:dark:bg-opacity-30">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Image
                src={
                  theme === 'dark' || resolvedTheme === 'dark'
                    ? '/static/images/yy-gear2-white.svg'
                    : '/static/images/yy-gear2-black.svg'
                }
                alt={'logo'}
                width="42"
                height="42"
                className="rounded-full"
              />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold">{siteMetadata.headerTitle}</div>
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
