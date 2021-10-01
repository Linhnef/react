import { Button, Typography } from "@material-ui/core"
import { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import useQuery from "../../hooks/useQuery"
import { useText } from "../../hooks/useText"

function AutoTextEffect() {
  const { text } = useText({ duration: "WE LOVE PROGRAMMING !", speed: 200 })
  return (
    <>
      <GlobalStyle />
      <Box>
        <Typography variant="h6">{text}</Typography>
      </Box>
    </>
  )
}
const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Roboto', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        overflow: hidden;
        margin: 0;
        background-color: #5aff;
    }
`

const Box = styled.div`
  padding: 1em;
  text-align: center;
  & h6 {
    font-size: 2em;
  }
`

export default AutoTextEffect
