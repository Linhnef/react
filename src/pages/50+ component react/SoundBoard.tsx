import React from "react"
import { createGlobalStyle } from "styled-components"
import Play from "../../hooks/useAudio"
import dungvianhmakhoc from "../sound/Dungvianhmakhoc.mp3"
import phienlatinhlang from "../sound/Phienlatinhlang.mp3"
import saigonhomnaymua from "../sound/Siagonhomnaymua.mp3"
import styled from "styled-components"
import { Typography } from "@material-ui/core"

function SoundBoard() {
  return (
    <>
      <GlobaleStyle />
      <Box>
        <Typography variant="h3">Sài gòn hôm nay mưa</Typography>
        <Play url={saigonhomnaymua}></Play>
      </Box>
      <Box>
        <Typography variant="h3">Phiến lá tĩnh lặng</Typography>
        <Play url={phienlatinhlang}></Play>
      </Box>
      <Box>
        <Typography variant="h3">Đừng vì anh mà khóc</Typography>
        <Play url={dungvianhmakhoc}></Play>
      </Box>
    </>
  )
}

const GlobaleStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');

    * {
    box-sizing: border-box;
    }

    body {
    background-color: rgb(161, 100, 223);
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    }
`

const Box = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 1em;
  margin: 2em;
  border-radius: 0.5em;
  border: 0.1em solid #fafafa;
  & h3 {
    font-size: 2em;
    font-weight: 900;
  }
`

export default SoundBoard
