import { Typography } from "@material-ui/core"
import { useState, KeyboardEvent } from "react"
import styled, { createGlobalStyle } from "styled-components"

function KeyDownHandle() {
  const [key, setKey] = useState("#")
  window.addEventListener("keydown", (event) => {
    setKey(event.key + " - " + event.keyCode)
  })
  return (
    <>
      <GlobalStyle />
      <Container>
        <Typography variant="overline">{key}</Typography>
      </Container>
    </>
  )
}
const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin : 0;
    }
`
const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  & span {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`

export default KeyDownHandle
