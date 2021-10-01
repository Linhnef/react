import { Typography } from "@material-ui/core"
import { useState } from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import CanvasDraw from "react-canvas-draw"
import InputColor from "react-input-color"

function DrawBox() {
  const [size, setSize] = useState(2)
  const [color, setColor] = useState<{ rgba: string }>()
  return (
    <>
      <GlobalStyle />
      <Container>
        <Frame>
          <Canvas brushColor={color?.rgba} brushRadius={size}></Canvas>
        </Frame>
        <Control>
          <Box
            onClick={() => {
              if (size > 0) setSize(size - 1)
            }}
          >
            <Typography variant="overline">-</Typography>
          </Box>
          <Box>
            <Typography variant="overline">{size}</Typography>
          </Box>
          <Box
            onClick={() => {
              setSize(size + 1)
            }}
          >
            <Typography variant="overline">+</Typography>
          </Box>
          <Box>
            <InputColor initialValue="#5e72e4" onChange={setColor} />
          </Box>
        </Control>
      </Container>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    * {
        box-sizing: border-box;
    }

    body {
        background-color: #fafafa;
        font-family: 'Roboto', sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
`
const Canvas = styled(CanvasDraw)`
  height: 80vh !important;
  width: 100% !important;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3);
`

const Box = styled.div`
  padding: 1em;
  background-color: #fafafa;
  margin: 0 2em;
`
const Control = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20vh;
  background-color: #5aff;
`

const Frame = styled.div`
  width: 100%;
  height: 80vh;
`

const Container = styled.div`
  width: 70vw;
  height: 100vh;
  border: 0.2em solid #5aff;
`

export default DrawBox
