import { useState, useEffect } from "react"

const formatDate = (x: Date) => {
  let H = `0${x.getHours()}`.slice(-2)
  let M = `0${x.getMinutes()}`.slice(-2)
  let S = `0${x.getSeconds()}`.slice(-2)
  return `${H}:${M}:${S}`
}

export const useClock = () => {
  const [timeString, setTimeString] = useState("")
  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date()
      // HH:mm:ss
      const newTimeString = formatDate(now)
      setTimeString(newTimeString)
    }, 1000)
    return () => {
      clearInterval(clockInterval)
    }
  }, [])
  return { timeString }
}
