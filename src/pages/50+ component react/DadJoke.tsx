import styled from "styled-components"
import React, { useState } from "react"
import { useEffect } from "react"
import { createGlobalStyle } from "styled-components"
import useAsync from "../../hooks/useAsync"
import useApi from "./ApiClient"
import { Button, Typography } from "@material-ui/core"
import LinearProgress from "@material-ui/core/LinearProgress"

function DadJoke() {
  const api = useApi
  const [joke, setJoke] = useState<string | null | undefined>("")
  const getJoke = useAsync(async () => {
    const response = await api.getJoke()
    if (!response) return
    setJoke(response)
  })
  useEffect(() => {
    if (joke !== null && joke !== undefined && joke.trim().length === 0) getJoke.run()
  }, [])
  return (
    <>
      <GlobalStyle />
      {getJoke.loading && <LinearProgress />}
      <Container>
        <Typography variant="h3">Don't Laugh Challenge</Typography>
        <Typography variant="h2">{joke ? joke : "// wait api"}</Typography>
        <Button onClick={() => getJoke.run()}>NEXT</Button>
      </Container>
    </>
  )
}

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }
    body {
        background-color: #5aff;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        overflow: hidden;
        margin : 0;
        text-align: center;
    }
`
const Container = styled.div`
  margin-top: 2em;
  background-color: #fafafa;
  padding: 2em;
  width: 60vw;
  border-radius: 2em;
  & h3 {
    font-size: 1.5em;
    margin: 1em;
    color: #8a8888;
  }
  & h2 {
    font-size: 1.8em;
    margin: 1em;
  }
  & button {
    border: 1px solid #000;
  }
`

export default DadJoke
