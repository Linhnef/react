import { AxiosInstance } from "axios"
import { User } from "./types/User"

export const createAppApiClient = (api: AxiosInstance) => {
  return {
    login: login(api),
  }
}

export const createPokeDexApiClient = (api: AxiosInstance) => {
  return {
    getPokeDex: getPokeDex(api),
  }
}

export const createRandomUserApi = (api: AxiosInstance) => {
  return {
    getRandomUser: getRandomUser(api),
  }
}

interface GetRamdomUserResponse {
  results: User[]
}

const getRandomUser =
  (api: AxiosInstance) =>
  async (results: number): Promise<User[] | undefined> => {
    try {
      const res = await api.get<GetRamdomUserResponse>("", {
        params: {
          results,
        },
      })
      return res.data.results
    } catch (err) {}
  }

export type PokeDex = {
  name: string
  id: number
  types: {
    type: {
      name: string
    }
  }[]
}

const getPokeDex =
  (api: AxiosInstance) =>
  async (data: number): Promise<PokeDex[] | undefined> => {
    try {
      const rs = []
      for (let i = 1; i < data; i++) {
        const res = await api.get<PokeDex>(`/${i}`)
        rs.push(res.data)
      }
      return rs
    } catch (err) {}
  }

type LoginRequest = {
  username: string
  password: string
}

type LoginResponse = {
  token: string
  user: User
}

const login =
  (api: AxiosInstance) =>
  async (data: LoginRequest): Promise<User | undefined> => {
    try {
      const res = await api.post<LoginResponse>("/login", data)

      return res.data.user
    } catch (err) {}
  }
