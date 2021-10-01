import styled from "styled-components"
import React, { ChangeEvent } from "react"
import { createGlobalStyle } from "styled-components"
import { AppBar, TextField, Toolbar, Grid, Typography, CardMedia } from "@material-ui/core"
import { useMovieApi } from "./ApiClient"
import useAsync from "../../hooks/useAsync"
import { useEffect, useState } from "react"
import { Movie } from "./Model"
const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280"
// https://quantrimang.com/bang-ma-mau-dep-trong-thiet-ke-website-163595

function MovieApp() {
  const api = useMovieApi
  const [movies, setMovies] = useState<Movie[]>()
  const [searchValue, setSearchValue] = useState("")
  const getMovies = useAsync(async () => {
    const response = await api.getMovies()
    if (!response) return
    setMovies(response)
  })
  const searchMovies = useAsync(async (data: string) => {
    const response = await api.searchMovie(data)
    console.log(response)
    if (!response) return
    setMovies(response)
  })

  window.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      searchMovies.run(searchValue)
      setSearchValue("")
    }
  })

  useEffect(() => {
    getMovies.run()
  }, [])
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <HeaderToolBar>
            <SearchBox
              value={searchValue}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setSearchValue(event.target.value)
              }}
              placeholder="Search ..."
              variant="outlined"
            />
          </HeaderToolBar>
        </Header>

        <ListMovie>
          {movies?.map((item, index) => (
            <Film key={index}>
              <Image image={`${IMAGE_PATH + item.poster_path}`} />
              <hr />
              <Grid container xs={12}>
                <Grid xs={10}>
                  <Title variant="h5">{item.title}</Title>
                </Grid>
                <Grid xs={2}>
                  <Rate>{item.vote_average}</Rate>
                </Grid>
              </Grid>
              <div>{item.overview}</div>
            </Film>
          ))}
        </ListMovie>
      </Container>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');
    *{
        box-sizing: border-box;
    }
    body {
        background-color: #303030;
        font-family: 'Poppins', sans-serif;
        margin: 0;
        & h5{
            font-size: 1.3em !important;
        }

    }
`
const MiniList = styled.div`
  display: flex;
  width: 100vw;
`

const Title = styled(Typography)`
  margin: 0 1em;
`
const Rate = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 1em 0.5em;
  padding: 0.5em 0;
  border-radius: 0.5em;
`

const ListMovie = styled.div`
  margin: 5em 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const Image = styled(CardMedia)`
  max-width: 100%;
  height: 75vh;
`

const Film = styled.div`
  width: 20em;
  margin: 1em;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  color: #fafafa;
  float: left;
  border-radius: 0.5em;
  &:hover {
    cursor: pointer;
    & .over-view {
      transform: translateY(0);
    }
  }
  & div:last-child {
    background-color: #fff;
    color: #000;
    padding: 2rem;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    max-height: 100%;
    transform: translateY(101%);
    overflow-y: auto;
    transition: transform 0.3s ease-in;
  }
`
const SearchBox = styled(TextField)`
  position: absolute;
  right: 8em;
  border-color: #303030 !important;
  & div {
    border-radius: 1em;
    height: 2em;
  }
  & input {
    color: #fafafa;
    border-radius: 1em;
  }
`
const Container = styled.div``

const Header = styled(AppBar)``

const HeaderToolBar = styled(Toolbar)`
  background-color: #303030;
  position: relative;
`

export default MovieApp
