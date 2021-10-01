import { useState, useEffect } from "react"

interface UseTextProps {
  duration: string
  speed: number
}

export const useText = (props: UseTextProps) => {
  const [text, setText] = useState("")
  const { duration, speed } = props
  useEffect(() => {
    let index = 1
    const clockInterval = setInterval(() => {
      if (index > duration.length) index = 1
      setText(duration.slice(0, index))
      index++
    }, speed)
    return () => {
      clearInterval(clockInterval)
    }
  }, [])
  return { text }
}
