import { Typography, Switch, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"

function GoodCheapSeat() {
  const [good, setGood] = useState(false)
  const [cheat, setCheat] = useState(false)
  const [seat, setSeat] = useState(false)

  return (
    <>
      <GlobalStyle />
      <Text variant="h5">How do you want your project to be?</Text>
      <ToggleContainer>
        <ListItem>
          <ListItemIcon>
            <Toggle
              checked={good}
              onChange={() => {
                if (cheat && seat) {
                  setGood(!good)
                  setSeat(!seat)
                } else {
                  setGood(!good)
                }
              }}
            />
          </ListItemIcon>
          <ListItemText>
            <Text variant="overline">GOOD</Text>
          </ListItemText>
        </ListItem>
      </ToggleContainer>
      <ToggleContainer>
        <ListItem>
          <ListItemIcon>
            <Toggle
              checked={cheat}
              onChange={() => {
                if (good && seat) {
                  setCheat(!cheat)
                  setGood(!good)
                } else {
                  setCheat(!cheat)
                }
              }}
            />
          </ListItemIcon>
          <ListItemText>
            <Text variant="overline">Cheat</Text>
          </ListItemText>
        </ListItem>
      </ToggleContainer>
      <ToggleContainer>
        <ListItem>
          <ListItemIcon>
            <Toggle
              checked={seat}
              onChange={() => {
                if (good && cheat) {
                  setSeat(!seat)
                  setCheat(!cheat)
                } else {
                  setSeat(!seat)
                }
              }}
            />
          </ListItemIcon>
          <ListItemText>
            <Text variant="overline">Fast</Text>
          </ListItemText>
        </ListItem>
      </ToggleContainer>
    </>
  )
}

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
const Text = styled(Typography)`
  &.MuiTypography-overline {
    font-weight: 900;
    margin: 1em;
  }
`
const Toggle = styled(Switch)`
  margin-left: 4em;
`

const ToggleContainer = styled.div``

export default GoodCheapSeat
