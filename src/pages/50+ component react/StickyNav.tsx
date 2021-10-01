import { AppBar, Toolbar, Typography, Grid, ListItem } from "@material-ui/core"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import styled, { createGlobalStyle } from "styled-components"

function StickyNav() {
  const [avtive, setActive] = useState(false)
  window.addEventListener("scroll", (event) => {
    if (window.pageYOffset > 176) {
      setActive(true)
    } else {
      setActive(false)
    }
  })
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header active={avtive}>
          <Toolbar>
            <Grid xs={12} container>
              <Grid xs={6}>
                <Typography variant="h6">MY WEBSITE</Typography>
              </Grid>
              <Grid xs={6}>
                <ListItem>
                  <NavLink to="#">Home</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="#">About</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="#">Services</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="#">Contact</NavLink>
                </ListItem>
              </Grid>
            </Grid>
          </Toolbar>
        </Header>
        <Panner>
          <Typography variant="h5">WELL COME TO MY WEBSITE</Typography>
          <Typography variant="overline">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?
          </Typography>
        </Panner>
        <Content>
          <Typography variant="h5">Content One</Typography>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem voluptates eveniet tempora ut
            cupiditate magnam, sapiente, hic quo in ipsum iste soluta eaque perferendis nihil recusandae dolore officia
            aperiam corporis similique. Facilis quos tempore labore totam! Consectetur molestiae iusto ducimus error
            reiciendis aspernatur dolor, modi dolorem sit architecto, voluptate magni sunt unde est quas? Voluptates a
            dolorum voluptatum quo perferendis aut sit. Aspernatur libero laboriosam ab eligendi omnis delectus earum
            labore, placeat officiis sint illum rem voluptas ipsum repellendus iste eius recusandae quae excepturi
            facere, iure rerum sequi? Illum velit delectus dicta et iste dolorum obcaecati minus odio eligendi!
          </Typography>
          <Typography variant="h5">Content One</Typography>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem voluptates eveniet tempora ut
            cupiditate magnam, sapiente, hic quo in ipsum iste soluta eaque perferendis nihil recusandae dolore officia
            aperiam corporis similique. Facilis quos tempore labore totam! Consectetur molestiae iusto ducimus error
            reiciendis aspernatur dolor, modi dolorem sit architecto, voluptate magni sunt unde est quas? Voluptates a
            dolorum voluptatum quo perferendis aut sit. Aspernatur libero laboriosam ab eligendi omnis delectus earum
            labore, placeat officiis sint illum rem voluptas ipsum repellendus iste eius recusandae quae excepturi
            facere, iure rerum sequi? Illum velit delectus dicta et iste dolorum obcaecati minus odio eligendi!
          </Typography>
        </Content>
      </Container>
    </>
  )
}

const Container = styled.div``

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    body {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
const Content = styled.div`
  width: 100vw;
  padding: 2em 3em;
  & h5 {
    font-weight: 900;
    padding: 1em 0;
  }
`

/*  */

const Panner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fafafa;
  flex-direction: column;
  background-image: url("https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  width: 100vw;
  height: 100vh;
  z-index: -2;
  & h5 {
    font-size: 2em;
    font-weight: 900;
  }
  & span {
    font-weight: 900;
  }
  &:before {
    position: absolute;
    content: "";
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`

/*  */

interface HeaderProps {
  active: boolean
}

const Header = styled(AppBar)<HeaderProps>`
  color: ${(props) => (props.active ? "#000" : "#fafafa")} !important;
  &.MuiAppBar-colorPrimary {
    background-color: ${(props) => (props.active ? "#fafafa" : "#000")};
    height: ${(props) => (props.active ? "4.5em" : "auto")};
  }

  & h6 {
    font-size: 1.2em;
    &:hover {
      cursor: pointer;
    }
  }
  & li {
    display: contents;
    & a {
      float: right;
      margin: 0 1em;
      text-decoration: none;
      color: ${(props) => (props.active ? "#000" : "#fafafa")};
    }
  }
`

export default StickyNav
