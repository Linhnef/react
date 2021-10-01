import { Button } from "@material-ui/core"
import styled, { createGlobalStyle } from "styled-components"

function ButtonRipple() {
  return (
    <>
      <GlobalStyle />
      <Submit>SUBMIT</Submit>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin : 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #5aff;
        height: 100vh;
    }
`

const Submit = styled(Button)`
  background-color: #fafafa;
  & .MuiButton-label {
    background-color: #fafafa;
    color: #000 !important;
    border-radius: 0.5em;
    padding: 1em 1.5em;
  }
  & .MuiTouchRipple-root {
    color: #f8f2f2;
  }
`

export default ButtonRipple
