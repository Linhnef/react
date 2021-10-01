import { createStore, combineReducers } from "redux"
import languageReducer from "./languageReducer"

const rootReducer = combineReducers({
  languge: languageReducer,
})

const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>

export default store
