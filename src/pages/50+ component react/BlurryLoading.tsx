import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { useState } from "react"
import { makeStyles, Paper, Typography } from "@material-ui/core"
import { useEffect } from "react"

const scale = (num: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
}

function BlurryLoading() {
  const classes = useStyles()
  const [load, setLoad] = useState(0)
  const change = () => {
    setLoad(load + 1)
    if (load > 99) {
      clearTimeout(timeout)
    }
  }
  const timeout = setTimeout(change, 30)
  useEffect(() => {
    change()
  }, [])
  return (
    <>
      <GlobalStyle />
      {load >= 99 ? <Background loading="lazy"></Background> : <></>}
      <LoadingText style={{ opacity: `${scale(load, 0, 100, 1, 0)}` }}>{load}%</LoadingText>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Ubuntu', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        overflow: hidden;
        margin: 0;
    }
`

const Background = styled.img`
  background: url("https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80")
    no-repeat center center/cover;
  position: absolute;
  top: -30px;
  left: -30px;
  width: calc(100vw + 60px);
  height: calc(100vh + 60px);
  animation-duration: 4s;
  z-index: -1;
`

const useStyles = makeStyles({})

const LoadingText = styled(Typography)`
  color: #000;
  z-index: 100;
  font-size: 2em;
`

export default BlurryLoading
