export type Movie = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: string
  poster_path: string
  release_date: Date
  title: string
  video: boolean
  vote_average: string
  vote_count: number
}

export type Gitthub = {
  public_repos: number
  public_gists: number
  followers: number
  following: number
  login: string
  bio: string
  avatar_url: string
}

export type Repository = {
  html_url: string
  name: string
}
