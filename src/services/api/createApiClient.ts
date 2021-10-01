import axios, { AxiosInstance } from "axios"
export type pokeDexClientArgs = {
  baseURL?: string
}
export const pokeDexApiClient = (): AxiosInstance => {
  const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon",
  })
  return api
}

export const randomUserApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: "https://randomuser.me/api",
  })
  return api
}
