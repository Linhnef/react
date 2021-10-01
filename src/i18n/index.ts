import en from "./en.json"
import vi from "./vi.json"
import de from "./de.json"

export const translate = (key: string, language: string): string => {
  let langugeData: { [key: string]: string } = {}
  if (language === "EN") {
    langugeData = en
  } else if (language === "VI") {
    langugeData = vi
  } else if (language === "DE") {
    langugeData = de
  }
  return langugeData[key]
}
