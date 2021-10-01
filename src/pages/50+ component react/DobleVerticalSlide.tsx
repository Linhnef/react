import { CardMedia, Typography, Button } from "@material-ui/core"
import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { useState } from "react"

function DobleVerticalSlide() {
  const [index, setIndex] = useState(0)
  return (
    <>
      <GlobalStyle />
      <Container>
        <LeftSlider index={index}>
          <Panner bacground="#FD3555">
            <Typography variant="h1">Nature flower</Typography>
            <Typography variant="overline">all in pink</Typography>
          </Panner>
          <Panner bacground="#2A86BA">
            <Typography variant="h1">Bluuue Sky</Typography>
            <Typography variant="overline">with it's mountains</Typography>
          </Panner>
          <Panner bacground="#252E33">
            <Typography variant="h1">Lonely castle</Typography>
            <Typography variant="overline">in the wilderness</Typography>
          </Panner>
          <Panner bacground="#FFB866">
            <Typography variant="h1">Flying eagle</Typography>
            <Typography variant="overline">in the sunset</Typography>
          </Panner>
        </LeftSlider>
        <RightSlider index={index}>
          <Picture image="https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80" />
          <Picture image="https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80" />
          <Picture image="https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80" />
          <Picture image="https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80" />
        </RightSlider>
        <div>
          <LeftButton>
            <ExpandMoreIcon
              onClick={() => {
                if (index - 1 < -3) {
                  setIndex(0)
                } else {
                  setIndex(index - 1)
                }
              }}
            />
          </LeftButton>
          <RightButton
            onClick={() => {
              if (index + 1 > 0) {
                setIndex(-3)
              } else {
                setIndex(index + 1)
              }
            }}
          >
            <ExpandLessIcon />
          </RightButton>
        </div>
      </Container>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        height: 100vh;
        overflow: hidden;
    }
`

const RightButton = styled.div`
  border: none;
  cursor: pointer;
  font-size: 1em;
  padding: 1em;
  background-color: rgba(248, 244, 244, 0.5);
  position: absolute;
  left: 30vw;
  top: 50vh;
  z-index: 100;
  transform: translateY(-100%);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`

const LeftButton = styled.div`
  border: none;
  cursor: pointer;
  font-size: 1em;
  padding: 1em;
  background-color: rgba(248, 244, 244, 0.5);
  position: absolute;
  left: 30vw;
  top: 50vh;
  z-index: 100;
  transform: translateX(-100%);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`

const Container = styled.div`
  position: relative;
`

const Picture = styled(CardMedia)`
  max-width: 70vw;
  height: 100vh;
`
interface PannerProps {
  bacground: string
}

const Panner = styled.div<PannerProps>`
  width: 30vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fafafa;
  background-color: ${(props) => props.bacground};
  & h1 {
    font-size: 2em;
    margin: 1em;
  }
`
interface ActiveProps {
  index: number
}

const RightSlider = styled.div<ActiveProps>`
  width: 70vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 30vw;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) => `translateY(-${(3 + props.index) * 637}px)`};
`

const LeftSlider = styled.div<ActiveProps>`
  width: 30vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) => `translateY(${props.index * 637}px)`};
`

export default DobleVerticalSlide
