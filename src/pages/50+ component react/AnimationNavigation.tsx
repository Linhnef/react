import { AppBar, IconButton, ListItem, ListItemText, Toolbar } from "@material-ui/core"
import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import CloseIcon from "@material-ui/icons/Close"
import DragHandleIcon from "@material-ui/icons/DragHandle"
import { NavLink } from "react-router-dom"
import { useState } from "react"

function AnimationNavigation() {
  const [active, setActive] = useState(false)
  return (
    <>
      <GlobalStyle />
      <Container>
        <NavTool active={active}>
          <ListItem>
            <NavLink to="#">
              <ListItemText>Home</ListItemText>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="#">
              <ListItemText>Works</ListItemText>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="#">
              <ListItemText>About</ListItemText>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="#">
              <ListItemText>Contact</ListItemText>
            </NavLink>
          </ListItem>
          <SlideButton>
            <IconButton
              onClick={() => {
                setActive(!active)
              }}
            >
              {active ? <CloseIcon /> : <DragHandleIcon />}
            </IconButton>
          </SlideButton>
        </NavTool>
      </Container>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

    * {
    box-sizing: border-box;
    }
    body{
        background-color: #eafbff;
        background-image: linear-gradient(
            to bottom,
            #eafbff 0%,
            #eafbff 50%,
            #5290f9 50%,
            #5290f9 100%
        );
        font-family: 'Muli', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        margin: 0;
    }
`
const SlideButton = styled.div`
  transform: rotate(-765deg) translateY(5.5px);
  transition: transform 0.6s linear, opacity 0.6s linear;
`
const Container = styled.div``

interface NavToolProps {
  active: boolean
}

const NavTool = styled(Toolbar)<NavToolProps>`
  background-color: #fff;
  border-radius: 0.5em;
  width: ${(props) => (props.active ? "auto" : "4.7vw")};
  & li {
    transform: rotateY(0deg);
    opacity: ${(props) => (props.active ? 1 : 0)};
    transition: transform 0.6s linear, opacity 0.6s linear;
  }
  & li a {
    display: ${(props) => (props.active ? "" : "none")};
    text-decoration: none;
    color: #000;
  }
  & div {
    transform: ${(props) => (props.active ? "translateX(0em)" : "translateX(-9em)")};
    & span {
      color: #5aff;
    }
  }
`

export default AnimationNavigation
