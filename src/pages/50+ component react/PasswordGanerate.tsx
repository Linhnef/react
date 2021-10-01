import { Button, TextField, ListItemIcon, Checkbox, ListItem, ListItemText, Typography } from "@material-ui/core"
import { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"

const getRandomSymbol = () => {
  const symbols = "!@#$%^&*(){}[]=<>/,."
  return symbols[Math.floor(Math.random() * symbols.length)]
}

const getRandomNumber = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

const getRandomUpper = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getRamdowLower = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const PasswordGanerate = () => {
  const [password, setPassword] = useState("")
  const [upperCase, setUppercase] = useState(false)
  const [lowerCase, setLowerCase] = useState(false)
  const [num, setNum] = useState(false)
  const [symbol, setSymbol] = useState(false)

  function generatePassword(
    length: number,
    upperCase: boolean,
    lowerCase: boolean,
    randomNumber: boolean,
    symbol: boolean
  ) {
    let finalPassword = ""
    const Feature = new Array()
    if (upperCase) {
      Feature.push(getRandomUpper)
    }
    if (lowerCase) {
      Feature.push(getRamdowLower)
    }
    if (randomNumber) {
      Feature.push(getRandomNumber)
    }
    if (symbol) {
      Feature.push(getRandomSymbol)
    }
    for (let i = 0; i < length; i++) {
      finalPassword += Feature[Math.floor(Math.random() * Feature.length)]()
    }

    return finalPassword
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Password value={password} variant="outlined" />
        <ListItem>
          <ListItemText>
            <Typography variant="overline">Password Length</Typography>
          </ListItemText>
          <ListItemIcon>
            <LengthInput variant="outlined" />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography variant="overline">Include uppercase letters</Typography>
          </ListItemText>
          <ListItemIcon>
            <Checkbox checked={upperCase} onClick={() => setUppercase(!upperCase)} />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography variant="overline">Include lowercase letters</Typography>
          </ListItemText>
          <ListItemIcon>
            <Checkbox checked={lowerCase} onClick={() => setLowerCase(!lowerCase)} />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography variant="overline">Include numbers</Typography>
          </ListItemText>
          <ListItemIcon>
            <Checkbox checked={num} onClick={() => setNum(!num)} />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography variant="overline">Include symbols</Typography>
          </ListItemText>
          <ListItemIcon>
            <Checkbox checked={symbol} onClick={() => setSymbol(!symbol)} />
          </ListItemIcon>
        </ListItem>
        <GetPassword
          onClick={() => setPassword(generatePassword(8, upperCase, lowerCase, num, symbol))}
          variant="outlined"
        >
          Generate Password
        </GetPassword>
      </Container>
    </>
  )
}

const LengthInput = styled(TextField)`
  & .MuiOutlinedInput-root {
    width: 3em;
    height: 1.5em;
    background-color: #fafafa;
  }
`

const GetPassword = styled(Button)`
  width: 100%;
`

const Password = styled(TextField)`
  width: 100%;
  margin: 1.2em 10%;
  > & label.Mui-focused {
    color: white;
  }
  & .MuiInput-underline:after {
    border-bottom: none;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border: none;
    }
    &:hover fieldset {
      border: none;
    }
    &.Mui-focused fieldset {
      border: none;
    }
  }
`

const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #5aff;
    }
`

const Container = styled.div`
  padding: 1em;
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.2);
`

export default PasswordGanerate
