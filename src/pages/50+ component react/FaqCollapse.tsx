import { IconButton, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core"
import styled, { createGlobalStyle } from "styled-components"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import CancelIcon from "@material-ui/icons/Cancel"
import { useState } from "react"

function FaqCollapse() {
  const [fQuestion, setFQuestion] = useState(false)
  const [sQuestion, setSQuestion] = useState(false)
  const [tQuestion, setTQuestion] = useState(false)
  const [foQuestion, setFoQuestion] = useState(false)
  const [fiQuestion, setFiQuestion] = useState(false)
  return (
    <>
      <GlobalStyle />
      <Container>
        <Typography variant="h2">Frequently Asked Questions</Typography>
        <Item active={fQuestion}>
          <ListItem>
            <ListItemText>
              <Typography variant="h4">Why shouldn't we trust atoms?</Typography>
            </ListItemText>
            <ListItemIcon
              onClick={() => {
                setFQuestion(!fQuestion)
              }}
            >
              <IconButton>{fQuestion ? <CancelIcon /> : <ExpandMoreIcon />}</IconButton>
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <Typography variant="h5">They make up everything</Typography>
          </ListItem>
        </Item>
        <Item active={sQuestion}>
          <ListItem>
            <ListItemText>
              <Typography variant="h4">What do you call someone with no body and no nose?</Typography>
            </ListItemText>
            <ListItemIcon
              onClick={() => {
                setSQuestion(!sQuestion)
              }}
            >
              <IconButton>{sQuestion ? <CancelIcon /> : <ExpandMoreIcon />}</IconButton>
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <Typography variant="h5">Nobody knows.</Typography>
          </ListItem>
        </Item>
        <Item active={tQuestion}>
          <ListItem>
            <ListItemText>
              <Typography variant="h4">What's the object-oriented way to become wealthy?</Typography>
            </ListItemText>
            <ListItemIcon
              onClick={() => {
                setTQuestion(!tQuestion)
              }}
            >
              <IconButton>{tQuestion ? <CancelIcon /> : <ExpandMoreIcon />}</IconButton>
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <Typography variant="h5">Inheritance</Typography>
          </ListItem>
        </Item>
        <Item active={foQuestion}>
          <ListItem>
            <ListItemText>
              <Typography variant="h4">How many tickles does it take to tickle an octopus?</Typography>
            </ListItemText>
            <ListItemIcon
              onClick={() => {
                setFoQuestion(!foQuestion)
              }}
            >
              <IconButton>{foQuestion ? <CancelIcon /> : <ExpandMoreIcon />}</IconButton>
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <Typography variant="h5">Ten-tickles</Typography>
          </ListItem>
        </Item>
        <Item active={fiQuestion}>
          <ListItem>
            <ListItemText>
              <Typography variant="h4">What is: 1 + 1?</Typography>
            </ListItemText>
            <ListItemIcon
              onClick={() => {
                setFiQuestion(!fiQuestion)
              }}
            >
              <IconButton>{fiQuestion ? <CancelIcon /> : <ExpandMoreIcon />}</IconButton>
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <Typography variant="h5">Depends on who are you asking.</Typography>
          </ListItem>
        </Item>
      </Container>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

    * {
    box-sizing: border-box;
    }

    body {
    font-family: 'Muli', sans-serif;
    background-color: #f0f0f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    }
`

const Container = styled.div`
  & h2 {
    font-size: 3em;
  }
`
interface ItemProps {
  active: boolean
}

const Item = styled.div<ItemProps>`
  background-color: transparent;
  -webkit-transition: height 1s;
  transition: height 1s;
  width: 40vw;
  height: ${(props) => (props.active ? 8 : 4)}em;
  border: 1px solid black;
  border-radius: 1em;
  margin: 2em;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
  & h4 {
    font-size: 1em;
    font-weight: bold;
  }

  & h5 {
    font-size: 0.8em;
    font-weight: bold;
    transition: transform 0.4s ease-in-out;
    transform: ${(props) => (props.active ? "translateX(0%)" : "translateX(-1000%)")};
  }

  @media screen and (max-width: 1120px) {
    margin-left: 20vw;
  }
`

export default FaqCollapse
