import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-6 xl:max-w-4xl xl:px-0 gap-10 sm:gap-14">{children}</div>
  )
}
