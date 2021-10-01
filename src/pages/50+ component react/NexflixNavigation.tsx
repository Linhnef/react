import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import CloseIcon from "@material-ui/icons/Close"
import MenuIcon from "@material-ui/icons/Menu"
import { useState } from "react"
import { ListItem, Typography, ListItemText } from "@material-ui/core"

function NexflixNavigation() {
  const [show, setShow] = useState(false)
  return (
    <>
      <GlobalStyle />
      <NavBlack show={show} />
      <NavRed show={show} />
      <Nav show={show}>
        <NavHeader>
          <CloseIcon onClick={() => setShow(!show)} />
        </NavHeader>
        <CategoryContainer>
          <NavItem>
            <ListItem>
              <ListItemText>
                <Typography variant="overline">Teams</Typography>
              </ListItemText>
            </ListItem>
          </NavItem>
          <NavItem>
            <ListItem>
              <ListItemText>
                <Typography variant="overline">Locations</Typography>
              </ListItemText>
            </ListItem>
          </NavItem>
          <NavItem>
            <ListItem>
              <ListItemText>
                <Typography variant="overline">Live at Netflix</Typography>
              </ListItemText>
            </ListItem>
          </NavItem>
          <ChildItem>
            <ListItem>
              <ListItemText>
                <Typography variant="overline">Netflix culture memo</Typography>
              </ListItemText>
            </ListItem>
          </ChildItem>
          <ChildItem>
            <ListItem>
              <ListItemText>
                <Typography variant="overline">Work life balance</Typography>
              </ListItemText>
            </ListItem>
          </ChildItem>
          <ChildItem>
            <ListItem>
              <ListItemText>
                <Typography variant="overline">Inclusion & deversity</Typography>
              </ListItemText>
            </ListItem>
          </ChildItem>
          <ChildItem>
            <ListItem>
              <ListItemText>
                <Typography variant="overline">Blog</Typography>
              </ListItemText>
            </ListItem>
          </ChildItem>
        </CategoryContainer>
      </Nav>
      <Menu onClick={() => setShow(!show)} />
      <Typography variant="overline">Main</Typography>
    </>
  )
}
const NavItem = styled.div`
  height: 2.7em;
  &:hover {
    cursor: pointer;
  }
`
const ChildItem = styled.div`
  height: 2.5em;
  margin-left: 2em;
  &:hover {
    cursor: pointer;
  }
`

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    } 

    body {
        position: relative;
        margin : 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
`
const CategoryContainer = styled.div`
  margin: 3em 0;
  height: 92vh;
  width: 100%;
`
const Menu = styled(MenuIcon)`
  position: absolute;
  left: 1em;
  top: 1em;
  &:hover {
    cursor: pointer;
  }
`

interface NavigationProps {
  show: boolean
}

const NavHeader = styled.div`
  position: relative;
  height: 8vh;
  width: 100%;
  color: #000;
  & svg {
    position: absolute;
    right: 0.5em;
    top: 0.5em;
    &:hover {
      cursor: pointer;
    }
  }
`

const NavBlack = styled.div<NavigationProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: 21em;
  height: 100vh;
  background-color: rgb(34, 31, 31);
  transform: ${(props) => (props.show ? " translateX(0%)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  transition-delay: ${(props) => (props.show ? 0 : 0.4)}s;
  z-index: 1;
`
const NavRed = styled.div<NavigationProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: 19em;
  height: 100vh;
  background-color: rgb(229, 9, 20);
  transform: ${(props) => (props.show ? " translateX(0%)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  transition-delay: 0.2s;
  z-index: 2;
`
const Nav = styled.div<NavigationProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: 17em;
  height: 100vh;
  background-color: #fafafa;
  transform: ${(props) => (props.show ? " translateX(0%)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  transition-delay: ${(props) => (props.show ? 0.4 : 0)}s;
  z-index: 3;
`

export default NexflixNavigation
