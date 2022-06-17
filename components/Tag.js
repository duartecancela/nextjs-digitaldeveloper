import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 flex text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
        <span># </span>
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
