import { Button, Typography } from "@material-ui/core"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"

function AnimationCountdown() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let index = 1
    const clockInterval = setInterval(() => {
      if (index < 100) index++
      setCount(index)
    }, 1 / 10)
    return () => {
      clearInterval(clockInterval)
    }
  }, [])
  return (
    <>
      <GlobalStyle />
      <ConuterContainer opacity={count / 100} variant="h5">
        <Typography variant="h3">{count}</Typography>
      </ConuterContainer>
    </>
  )
}

interface ConuterContainerProps {
  opacity: number
}

const ConuterContainer = styled(Typography)<ConuterContainerProps>`
  opacity: ${(props) => props.opacity};
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    animation: left-to-right 1s ease-in forwards;
    @keyframes left-to-right {
      0% {
        transform: translateX(0);
      }
      33% {
        transform: translateY(20vh);
      }
      66% {
        transform: translateY(20vh) translateX(20vw);
      }
      100% {
        transform: translateX(20vw);
      }
    }
  }
`

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin : 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #5aff;
    }
`

export default AnimationCountdown
