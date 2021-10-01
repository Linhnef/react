import { LanguageState, SET_LANGUAGE, LanguageAction } from "../types/languageType"

const localStorageLanguage = localStorage.getItem("language")

const initialState: LanguageState = {
  language: localStorageLanguage ? localStorageLanguage : "EN",
}

const languageReducer = (state = initialState, action: LanguageAction) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      }
    default:
      return state
  }
}

export default languageReducer
