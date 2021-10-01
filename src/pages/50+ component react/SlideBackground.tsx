import { CardMedia, IconButton } from "@material-ui/core"
import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft"
import ArrowRightIcon from "@material-ui/icons/ArrowRight"
import { useState } from "react"

const images = [
  "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
  "https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
]

function SlideBackground() {
  const [index, setIndex] = useState(1)
  return (
    <>
      <GlobalStyle background={images[index]} />

      <ArrowBack>
        <IconButton
          onClick={() => {
            if (index === 0) {
              setIndex(images.length - 1)
            } else {
              setIndex(index - 1)
            }
          }}
        >
          <BackIcon />
        </IconButton>
      </ArrowBack>
      <SlideItem background={images[index]} />
      <ArrowNext>
        <IconButton
          onClick={() => {
            if (index === images.length - 1) {
              setIndex(0)
            } else {
              setIndex(index + 1)
            }
          }}
        >
          <NextIcon />
        </IconButton>
      </ArrowNext>
    </>
  )
}
interface GlobalStyleProps {
  background: string
}
const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    display: flex;
    flex-direction: column;
    background-image: ${(props) => `url(${props.background})`};
    height: 100vh;
    background-position: center center;
    background-size: cover;
    transition: 0.4s;
    justify-content: center;
    align-items: center;
  }
  body:after{
    position: absolute;
    top: 0;
    left : 0;
    content: '';
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    z-index: -1;
  }
`
const SlideItem = styled(CardMedia)<GlobalStyleProps>`
  width: 70vw;
  height: 70vh;
  background-image: ${(props) => `url(${props.background})`};
  background-position: center center;
  background-size: cover;
  z-index: 1;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 0.4s;
  &:hover {
    cursor: pointer;
  }
`
const ArrowBack = styled.div`
  position: fixed;
  top: 40%;
  left: 0em;
`
const ArrowNext = styled.div`
  position: fixed;
  top: 40%;
  right: 0;
`

const NextIcon = styled(ArrowRightIcon)`
  color: #fafafa;
  width: 4em !important;
  height: 4em !important;
`
const BackIcon = styled(ArrowLeftIcon)`
  color: #fafafa;
  width: 4em !important;
  height: 4em !important;
`

export default SlideBackground
