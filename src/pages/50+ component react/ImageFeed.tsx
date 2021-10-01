import { CardMedia } from "@material-ui/core"
import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import styled, { createGlobalStyle } from "styled-components"
const unsplashURL = "https://source.unsplash.com/random/"

function ImageFeed() {
  const getRandomNr = () => {
    return Math.floor(Math.random() * 10) + 300
  }
  const getRandomSize = () => {
    return `${getRandomNr()}x${getRandomNr()}`
  }
  const [images, setImages] = useState<string[]>([])
  useEffect(() => {
    const getImage = () => {
      const rs: string[] = []
      for (let i = 0; i < 3 * 5; i++) {
        rs.push(`${unsplashURL}${getRandomSize()}`)
      }
      setImages(rs)
    }
    getImage()
  }, [])
  return (
    <>
      <GlobalStyle />
      <Container>
        {images.map((item) => (
          <Image image={item} />
        ))}
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
        background-color: #fafafa;
    }
`
const Container = styled.div`
  width: 80%;
  margin-left: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const Image = styled(CardMedia)`
  max-width: 19em;
  min-width: 19em;
  height: 20em;
  margin: 0.5em;
`

export default ImageFeed
