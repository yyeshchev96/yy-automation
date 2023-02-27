import { ReactNode } from 'react'
import GradientText from './GradientText'

interface Props {
  children: ReactNode
  extra?: ReactNode // additional element which should not be colored by gradient
}

export default function PageTitle({ children, extra }: Props) {
  return (
    <h1 className="text-5xl font-extrabold leading-12 tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl sm:leading-12 md:text-6xl md:leading-14">
      <GradientText>{children}</GradientText>
      {extra ? extra : ''}
    </h1>
  )
}
