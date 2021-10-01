import { useRef, useEffect } from "react"

export const usePreviousState = <T>(value: T) => {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}
