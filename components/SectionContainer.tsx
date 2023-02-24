import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return <div className="mx-auto max-w-3xl gap-10 sm:gap-14 xl:max-w-4xl">{children}</div>
}
