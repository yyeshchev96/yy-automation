import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function GradientText({ children }: Props) {
  return (
    <span className="bg-gradient-to-r from-emerald-500 via-cyan-900 to-blue-500 bg-clip-text text-transparent">
      {children}
    </span>
  )
}
