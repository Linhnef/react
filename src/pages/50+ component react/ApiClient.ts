import axios, { AxiosInstance } from "axios"
import { Gitthub, Movie, Repository } from "./Model"

const createAppApiClient = (api: AxiosInstance) => {
  return {
    getJoke: getJoke(api),
  }
}

const createMovieApiClient = (api: AxiosInstance) => {
  return {
    getMovies: getMovies(api),
    searchMovie: searchMovie(api),
  }
}

const createGitthubApi = (api: AxiosInstance) => {
  return {
    getGitthubUser: getGitthubUser(api),
    getRepository: getRepository(api),
  }
}

const GitthubBaseUrl = "https://api.github.com"

const gitthubApi = axios.create({
  baseURL: GitthubBaseUrl,
})

const movieBaseUrl = "https://api.themoviedb.org/3/discover"

const movieApi = axios.create({
  baseURL: movieBaseUrl,
})
const jokebaseUrl = "https://icanhazdadjoke.com"
const JokeApi = axios.create({
  baseURL: jokebaseUrl,
  headers: {
    Accept: "application/json",
  },
})

const getJoke = (api: AxiosInstance) => async (): Promise<string | null | undefined> => {
  try {
    const response = await api.get<{ id: string; joke: string; status: number }>("")
    return response.data.joke
  } catch (errer) {}
}
type GetMovieResponse = {
  results: Movie[]
  page: number
}

const getMovies = (api: AxiosInstance) => async (): Promise<Movie[] | null | undefined> => {
  try {
    const response = await api.get<GetMovieResponse>(
      "/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1"
    )
    return response.data.results
  } catch (error) {}
}

const searchMovie =
  (api: AxiosInstance) =>
  async (data: string): Promise<Movie[] | null | undefined> => {
    const response = await api.get<GetMovieResponse>("/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=" + data)
    return response.data.results
  }

const getGitthubUser =
  (api: AxiosInstance) =>
  async (data: string): Promise<Gitthub | null | undefined> => {
    try {
      const response = await api.get<Gitthub>("/users/" + data)
      return response.data
    } catch (error) {}
  }

const getRepository =
  (api: AxiosInstance) =>
  async (data: string): Promise<Repository[] | null | undefined> => {
    const response = await api.get<Repository[]>(`/users/${data}/repos?sort=created`)
    return response.data
  }
const useApi = createAppApiClient(JokeApi)
export const useMovieApi = createMovieApiClient(movieApi)
export const useGItthubApi = createGitthubApi(gitthubApi)
export default useApi
