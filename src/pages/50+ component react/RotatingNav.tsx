import { Typography, Button, IconButton } from "@material-ui/core"
import styled, { createGlobalStyle } from "styled-components"
import MenuIcon from "@material-ui/icons/Menu"
import { useState } from "react"
import CancelIcon from "@material-ui/icons/Cancel"
const RotatingNav = () => {
  const [active, setActive] = useState(false)
  return (
    <>
      <GlobalStyle />
      <CircleContainer>
        <Circle className={active ? "show-nav" : "unshow-nav"}>
          <MenuButton
            onClick={() => {
              setActive(!active)
            }}
          />
          <Cancel
            onClick={() => {
              setActive(!active)
            }}
          />
        </Circle>
      </CircleContainer>
      <NavControl className={active ? "show-nav" : "unshow-nav"}>
        <Menu>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </Menu>
      </NavControl>
      <Container>
        <Paner className={active ? "show-nav" : ""}>
          <Typography variant="h3">Amazing Article</Typography>
          <Typography variant="overline">Florin Pop</Typography>
          <Typography variant="subtitle2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores cupiditate,
            maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus, illo,
            maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia labore pariatur sunt quia harum aut. Eum
            maxime dolorem provident natus veritatis molestiae cumque quod voluptates ab non, tempore cupiditate?
            Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor dignissimos in
            error placeat quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium.
            Ducimus consequuntur perferendis consequatur nobis exercitationem molestias fugiat commodi omnis. Asperiores
            quia tenetur nemo ipsa.
          </Typography>
          <Typography variant="h6">My Dog</Typography>
          <Img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" />
          <Typography variant="subtitle2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo, incidunt vel
            consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid. Perferendis
            totam placeat molestias illo laudantium? Minus id minima doloribus dolorum fugit deserunt qui vero voluptas,
            ut quia cum amet temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores explicabo provident.
            Voluptates sint, neque fuga cum illum, tempore autem maxime similique laborum odio, magnam esse. Aperiam?
          </Typography>
        </Paner>
      </Container>
    </>
  )
}
const NavControl = styled.div`
  position: fixed;
  top: 60%;
  z-index: -1;
  & .show-nav {
    z-index: 100;
  }
`

const Menu = styled.nav`
  position: relative;
  color: #000;
  margin-left: 5em;
  & ul {
    list-style-type: none;
    padding: 2em;
    margin-left: 5em;
  }

  & ul li {
    text-transform: uppercase;
    margin: 1em 0;
    color: #fafafa;
    margin-left: -5em;
    &:hover {
      cursor: pointer;
    }
  }
  & ul li i {
    font-size: 1.3em;
  }
  & ul li {
    transform: translateX(-80%);
  }

  & ul li + li {
    transform: translateX(-40%);
  }

  & ul li + li + li {
    transform: translateX(0%);
  }
`

const MenuButton = styled(MenuIcon)`
  cursor: pointer;
  position: absolute;
  top: 60%;
  height: 5em;
  background: transparent;
  border: 0;
  font-size: 2em;
  color: #fff;
  left: 60%;
  &:focus {
    outline: none;
  }
`

const Cancel = styled(CancelIcon)`
  cursor: pointer;
  position: absolute;
  top: 60%;
  left: 30%;
  height: 5em;
  background: transparent;
  border: 0;
  font-size: 2em;
  color: #fff;
  &:focus {
    outline: none;
  }
`

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
    * {
      box-sizing: border-box;
    }

    body {
    position: relative;
    font-family: 'Lato', sans-serif;
    background-color: #333;
    color: #222;
    overflow-x: hidden;
    margin: 0;
    }
`

const Circle = styled.div`
  background-color: #ff7979;
  height: 10em;
  width: 10em;
  border-radius: 50%;
  position: relative;
  transition: transform 0.5s linear;
`

const CircleContainer = styled.div`
  position: fixed;
  left: -5em;
  top: -5em;
  transform-origin: top left;
  z-index: 100;
  & .show-nav {
    position: relative;
    transform: rotate(-70deg);
  }
  & .unshow-nav {
    transform: rotate(0deg);
  }
`

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  & .show-nav {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(-20deg);
  }
`

const Paner = styled.div`
  transform-origin: top left;
  transition: transform 0.5s linear;
  background-color: #fafafa;
  width: 100vw;
  padding: 10vw;
  max-width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
    display: none;
  }
  &::-webkit-scrollbar {
    width: 0.3vw;
    background-color: #f5f5f5;
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
    display: none;
  }
  & h3 {
    padding: 0.2em 0;
  }
  & span {
    margin: 1em 0;
  }
  & h6 {
    margin: 1em 0;
  }
`

const Img = styled.img`
  max-width: 100%;
`
interface TextProps {}

export default RotatingNav
