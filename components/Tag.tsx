import Link from 'next/link'
import { kebabCase } from 'pliny/utils/kebabCase'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="pr-2 text-sm font-medium uppercase text-primary-500 hover:text-primary-700 dark:hover:text-primary-400"
    >
      #{text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
