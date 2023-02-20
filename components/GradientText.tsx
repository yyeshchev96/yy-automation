import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function GradientText({ children }: Props) {
  return (
    <span className="bg-gradient-to-r from-emerald-400 via-cyan-700 to-blue-400 bg-clip-text text-transparent">
      {children}
    </span>
  )
}
