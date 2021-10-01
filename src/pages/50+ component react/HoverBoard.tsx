import { useEffect } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Grid } from "@material-ui/core"

function HoverBoard() {
  useEffect(() => {}, [])
  return (
    <>
      <GlobalStyle />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
    </>
  )
}

const Row = () => {
  const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"]
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
  }
  return (
    <Board>
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
      <Square color={getRandomColor()} />
    </Board>
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
        background-color: rgba(0, 0, 0, 0.9);
    }
`

const Board = styled(Grid)`
  margin: 0.08em;
  display: flex;
  flex-flow: row wrap;
  width: 49.85em;
  height: 1em;
  background-color: rgba(0, 0, 0, 0.5);
`
interface Color {
  color: string
}
const Square = styled.div<Color>`
  width: 1em;
  height: 1em;
  background-color: #1d1d1d;
  box-shadow: 0 0 2px #000;
  margin: 0.08em;
  transition: 2s ease;
  &:hover {
    background-color: ${(props) => props.color};
    transition-duration: 0s;
  }
`

export default HoverBoard
