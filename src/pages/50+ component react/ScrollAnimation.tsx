import { Typography } from "@material-ui/core"
import styled, { createGlobalStyle } from "styled-components"

function ScrollAnimation() {
  const boxes = document.querySelectorAll("div")

  window.addEventListener("scroll", checkBoxes)

  checkBoxes()

  function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4

    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top
      box.classList.add("show")
      if (boxTop < triggerBottom) {
      } else {
        box.classList.remove("show")
      }
    })
  }
  return (
    <>
      <Container>
        <GlobalStyle />
        <Typography variant="overline">Scroll animation</Typography>
        <Box className="box">
          <Typography variant="h2">Box</Typography>
        </Box>
        <Box className="box">
          <Typography variant="h2">Box</Typography>
        </Box>
      </Container>
    </>
  )
}
const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0;
        overflow-x: hidden;
        text-align: center;
    }
`
const Container = styled.div`
  & .show {
    transform: translateX(0);
  }
`

const Box = styled.div`
  margin: 2em;
  padding: 3em;
  width: 20em;
  background-color: #8f8c8c;
  border-radius: 1em;
  transform: translateX(400%);
  transition: transform 0.4s ease;
  & h2 {
    font-size: 2em;
    text-align: center;
  }
  &:nth-of-type(even) {
    transform: translateX(-400%);
  }
`

export default ScrollAnimation
