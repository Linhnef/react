import { Typography } from "@material-ui/core"
import styled, { createGlobalStyle } from "styled-components"

function SplitLandPage() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <LeftLayout>
          <Typography variant="h1">Playstation 5</Typography>
          <a href="#" className="btn left">
            BUY NOW
          </a>
        </LeftLayout>
        <RightLayout>
          <Typography variant="h1">XBox Series X</Typography>
          <a href="#" className="btn right">
            BUY NOW
          </a>
        </RightLayout>
      </Container>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Roboto', sans-serif;
        height: 100vh;
        overflow: hidden;
        margin: 0;
    }
`
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #333;
  & .split {
    position: absolute;
    width: 50%;
    height: 100%;
    overflow: hidden;
  }
  & .btn {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 50%;
    top: 40%;
    transform: translateX(-50%);
    text-decoration: none;
    color: #fff;
    border: #fff solid 0.2rem;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    width: 15rem;
    padding: 1.5rem;
    &.left:hover {
      background-color: rgba(87, 84, 236, 1);
      border: none;
    }
    &.right:hover {
      background-color: rgba(28, 122, 28, 1);
      border: none;
    }
  }
  & h1 {
    font-size: 4rem;
    color: #fff;
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 2em;
      top: 30%;
    }

    .btn {
      padding: 1.2em;
      width: 12em;
    }
  }
`
const RightLayout = styled.div`
  background: url("https://github.com/bradtraversy/50projects50days/blob/master/split-landing-page/xbox.jpg?raw=true");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 100vh;
  width: 50%;
  transition: transform 0.2s;
  &:hover {
    width: 70%;
    transform: scale(1.2);
    z-index: 100;
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(43, 43, 43, 0.8);
  }
`

const LeftLayout = styled.div`
  background: url("https://github.com/bradtraversy/50projects50days/blob/master/split-landing-page/ps.jpg?raw=true");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 100vh;
  width: 50%;
  transition: transform 0.2s;
  &:hover {
    width: 70%;
    transform: scale(1.2);
    z-index: 100;
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(87, 84, 236, 0.7);
  }
`

export default SplitLandPage
