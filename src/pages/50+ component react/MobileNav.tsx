import { Grid, Typography } from "@material-ui/core"
import React, { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import HomeIcon from "@material-ui/icons/Home"
import WorkIcon from "@material-ui/icons/Work"
import BookIcon from "@material-ui/icons/Book"
import GroupIcon from "@material-ui/icons/Group"

function MobileNav() {
  const [main, setMain] = useState(0)
  return (
    <>
      <GlobalStyle />
      <Container>
        {main === 0 ? <Home /> : main === 1 ? <Work /> : main === 2 ? <Blog /> : <AboutUs />}
        <Navigation container xs={12}>
          <NavItem xs={3}>
            <HomeIcon onClick={() => setMain(0)} />
            <Typography>Home</Typography>
          </NavItem>
          <NavItem onClick={() => setMain(1)} xs={3}>
            <WorkIcon />
            <Typography>Work</Typography>
          </NavItem>
          <NavItem onClick={() => setMain(2)} xs={3}>
            <BookIcon />
            <Typography>Blog</Typography>
          </NavItem>
          <NavItem onClick={() => setMain(3)} xs={3}>
            <GroupIcon />
            <Typography>Abot Us</Typography>
          </NavItem>
        </Navigation>
      </Container>
    </>
  )
}

const Home = () => {
  return (
    <BackGround image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
  )
}
const Work = () => {
  return (
    <BackGround image="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80" />
  )
}
const Blog = () => {
  return (
    <BackGround image="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80" />
  )
}
const AboutUs = () => {
  return (
    <BackGround image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" />
  )
}

interface BackGroundProps {
  image: string
}

const Navigation = styled(Grid)`
  width: 100%;
`
const NavItem = styled(Grid)`
  text-align: center;
  & p {
    font-size: 0.8em;
    color: gray;
  }
  & svg {
    height: 1em !important;
    width: 1em !important;
    display: inline-block;
    margin: 0.2em 0;
    color: gray;
    &:hover {
      color: #4e0296;
      cursor: pointer;
    }
  }
`

const BackGround = styled.div<BackGroundProps>`
  width: 100%;
  height: 90%;
  background-image: ${(props) => `url('${props.image}')`};
  background-position: center;
  background-repeat: no-repeat;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
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
        background: #efefbb;
        background: linear-gradient(to right, #d4d3dd, #efefbb);
    }
`

const Container = styled.div`
  width: 22em;
  height: 38em;
  background-color: #fafafa;
  border: 0.2em solid #fafafa;
  border-radius: 1em;
`

export default MobileNav
