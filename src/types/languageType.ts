export const SET_LANGUAGE = "SET_LANGUAGE"

export interface LanguageState {
  language: string
}

interface SetLangugeAction {
  type: typeof SET_LANGUAGE
  payload: string
}

export type LanguageAction = SetLangugeAction
