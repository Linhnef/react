import styled, { createGlobalStyle } from "styled-components"

function KeneticLoading() {
  return (
    <>
      <GlobalStyle />
      <Kenetic />
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
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background-color: #5aff;
        height: 100vh;
    }
`

const Kenetic = styled.div`
  position: relative;
  width: 7em;
  height: 7em;
  &:after,
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border: 4em solid transparent;
    border-bottom-color: #fff;
    animation: rotateAfter 2s linear infinite 0.5s;
  }

  &:before {
    transform: rotate(90deg);
    animation: rotateBefore 2s linear infinite;
  }

  @keyframes rotateAfter {
    0%,
    25% {
      transform: rotate(0deg);
    }
    50%,
    75% {
      transform: rotate(100deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rotateBefore{
    0%,
    25% {
      transform: rotate(90deg);
    }
    50%,
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(450deg);
    }
  }
`

export default KeneticLoading
