import { Button, FormGroup, TextField, Typography } from "@material-ui/core"
import React, { ChangeEvent } from "react"
import { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"

function EffectImageWithLenght() {
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  return (
    <>
      <GlobalStyle />
      <Container blur={20 - password.length * 2}></Container>
      <Form>
        <Typography variant="overline">Login</Typography>
        <TextField
          value={username}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
          variant="outlined"
          label="USER NAME"
        />
        <TextField
          value={password}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
          type="password"
          variant="outlined"
          label="PASSWORD"
        />
        <Button>Submit</Button>
      </Form>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {position: relative;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
`

const Form = styled(FormGroup)`
  position: absolute;
  top: 45%;
  left: 42%;
  padding: 2em 1em;
  background-color: #fafafa;
  border-radius: 0.5em;
  & .MuiOutlinedInput-root {
    height: 3em;
    width: 15em;
    margin: 0.5em 0;
    font-size: 1em;
  }
  & span {
    font-weight: 900;
    text-align: center;
  }
  & button {
    background-color: rgba(0, 0, 0, 0.3);
  }
`
interface ContainerProps {
  blur: number
}

const Container = styled.div<ContainerProps>`
  width: 100vw;
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1556745757-8d76bdb6984b");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: ${(props) => `blur(${props.blur}px)`};
`

export default EffectImageWithLenght
