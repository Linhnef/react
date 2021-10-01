import { SET_LANGUAGE, LanguageAction } from "../types/languageType"

export const setLanguage = (language: string): LanguageAction => {
  localStorage.setItem("language", language)
  return {
    type: SET_LANGUAGE,
    payload: language,
  }
}
