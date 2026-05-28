"use client"

import { useEffect, useState } from "react"

interface TypewriterProps {
  text: string
  speed?: number
  className?: string}

export function Typewriter({ className,text, speed = 100 }: TypewriterProps) {
  const [displayed, setDisplayed] = useState("")

  useEffect(() => {
    let index = 0

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, index + 1))
      index++

      if (index === text.length) {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return <span className={className}>{displayed}</span>
}
