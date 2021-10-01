import React, { useEffect, useState } from "react"

type ReturnType<T> = [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>]

export const useLocalstorage = <T>(key: string, initialValue?: T): ReturnType<T> => {
  const [state, setState] = useState<T | undefined>(() => {
    if (!initialValue) return
    try {
      const value = localStorage.getItem(key)
      return value ? JSON.parse(value) : initialValue
    } catch (Error) {
      return initialValue
    }
  })
  useEffect(() => {
    if (state) {
      try {
        localStorage.setItem(key, JSON.stringify(state))
      } catch (error) {
        console.log(error)
      }
    }
  }, [state])

  return [state, setState]
}

// use : const [state ,setState] = useLocalstorage('key','initial value')
