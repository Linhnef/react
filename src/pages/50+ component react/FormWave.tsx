import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Dialog, Typography, TextField, makeStyles, withStyles, Button } from "@material-ui/core"

function FormWave() {
  return (
    <>
      <GlobalStyle />

      <Container>
        <Typography variant="h2">Please login</Typography>
        <StyledTextField label="Email" />
        <StyledTextField label="Password" />
        <Submit variant="outlined">Login</Submit>
        <Text color="#fafafa">Don't have account?</Text>
        <Text color="#000">Register</Text>
      </Container>
    </>
  )
}

const WithStylesTextField = withStyles({
  root: {
    background: "white",
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField)

const StyledTextField = styled(TextField)`
  width: 80%;
  margin: 1.2em 10%;
  margin-top: 0;
  & label.Mui-focused {
    color: white;
  }
  & .MuiInput-underline:after {
    border-bottom-color: white;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border-color: white;
    }
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`
interface TextProps {
  color: string
}

const Text = styled.span<TextProps>`
  color: ${(props) => props.color};
  text-align: center;
`

const Submit = styled(Button)`
  width: 80%;
  margin: 1.2em 10%;
`

const GlobalStyle = createGlobalStyle`
        * {
        box-sizing: border-box;
        }

        body {
        background-color: steelblue;
        color: #fff;
        font-family: 'Muli', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        overflow: hidden;
        margin: 0;
        }
`
const Container = styled.div`
  width: 25vw;
  height: 70vh;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.4);
  & h2 {
    font-size: 2.3em;
    text-align: center;
    padding: 1em;
    color: #fafafa;
  }
`
export default FormWave
