import { useState } from "react"

const getCookieValue = (key: string) => {
  const allcookies = document.cookie
  let storedValue = ""
  if (allcookies) {
    const cookieArray = allcookies.split(";")
    cookieArray.filter((element) => {
      const singleCookie = element.split("=")
      if (singleCookie[0].trim() === key) {
        storedValue = singleCookie[1]
      }
      return storedValue
    })
  }
  return storedValue
}

export const useCookie = (key: string, initialCokie: string) => {
  const [cookie, setCookie] = useState(() => {
    return getCookieValue(key).length === 0 ? initialCokie : getCookieValue(key)
  })
  const updateCookie = (newValue: string) => {
    setCookie(newValue)
    document.cookie = `${key}=${newValue};`
  }
  const removeCookie = () => {
    if (getCookieValue(key)) {
      setCookie("")
      var now = new Date()
      now.setMonth(now.getMonth() - 1)
      document.cookie = `${key}=;expires= ${now.toUTCString()}`
    }
  }
  return { cookie, updateCookie, removeCookie }
}
