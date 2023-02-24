import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <div className="mx-auto max-w-3xl gap-10 px-5 sm:gap-14 sm:px-6 xl:max-w-4xl xl:px-0">
      {children}
    </div>
  )
}
