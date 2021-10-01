import { CardMedia, Typography } from "@material-ui/core"
import React, { MouseEvent } from "react"
import { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import FavoriteIcon from "@material-ui/icons/Favorite"

function DoubleClickHeart() {
  const [time, setTime] = useState(0)
  const [show, setShow] = useState(true)
  const [top, setTop] = useState(200)
  const [left, setLeft] = useState(200)
  const handleActive = () => {
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 1000)
  }
  return (
    <>
      <GlobalStyle />
      <Container>
        <Typography variant="h5">Double click on the image to</Typography>
        <Typography variant="overline">You liked it {time}</Typography>
        <Panner
          onDoubleClick={(event: MouseEvent<HTMLDivElement>) => {
            console.log(event.clientX)
            setTop(event.clientX)
            setLeft(event.clientY)
            setShow(!show)
          }}
          image="https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        />
        <Heart className={show ? "active" : ""} top={top} left={left} active={show} />
      </Container>
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
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`
interface HeartProps {
  top: number
  left: number
  active: boolean
}

const Heart = styled(FavoriteIcon)<HeartProps>`
  visibility: ${(props) => (props.active ? "" : "hidden")};
  color: #e20851;
  width: 1em !important;
  height: 1em !important;
  &.active {
    position: absolute;
    top: ${(props) => props.top}px;
    left: ${(props) => props.left}px;
    animation: grow 0.6s linear;
    transform: translate(-50%, -50%) scale(0);
    @keyframes grow {
      to {
        transform: translate(-50%, -50%) scale(10);
        opacity: 0;
      }
    }
  }
`

const Panner = styled(CardMedia)`
  max-width: 20em;
  height: 30em;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`

const Container = styled.div`
  position: relative;
  & h5 {
    margin: 1em 0;
  }

  & span {
    margin: 1em 0;
  }
  & div {
    margin: 1em 0;
    &:hover {
      cursor: pointer;
    }
  }
`

export default DoubleClickHeart
