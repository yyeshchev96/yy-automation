import { ReactNode } from 'react'
import GradientText from './GradientText'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="text-5xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl sm:leading-10 md:text-6xl md:leading-14">
      <GradientText>{children}</GradientText>
    </h1>
  )
}
