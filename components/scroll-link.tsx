'use client'

import * as React from 'react'

type Props = {
  target: string
  children: React.ReactNode
  className?: string
  offset?: number
}

export default function ScrollLink({ target, children, className, offset = 80 }: Props) {
  const onClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      const el = document.getElementById(target)
      if (!el) return
      const y = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top: y, behavior: 'smooth' })
    },
    [target, offset]
  )

  return (
    <a href={`#${target}`} onClick={onClick} className={className}>
      {children}
    </a>
  )
}
