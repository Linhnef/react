import { CardMedia, Grid } from "@material-ui/core"
import { DragEvent, useState } from "react"
import styled, { createGlobalStyle } from "styled-components"

function Drag() {
  const [items, setItems] = useState(["https://source.unsplash.com/random/150x150", "", "", ""])
  const dragStartHandler = (event: DragEvent<HTMLDivElement>, data: string) => {
    event.dataTransfer.setData("img", data)
  }

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }
  const dropHandler = (event: DragEvent<HTMLDivElement>, index: number) => {
    event.preventDefault()
    let data = event.dataTransfer.getData("img")
    let tmps = items.filter((item) => item !== data)
    tmps.splice(index, 0, data)
    setItems(tmps)
  }
  return (
    <>
      <GlobalStyle />
      <Grid container xs={12}>
        {items.map((item, index) => (
          <Box
            key={index}
            image={item}
            draggable
            onDrop={(event: DragEvent<HTMLDivElement>) => {
              dropHandler(event, index)
            }}
            onDragStart={(event: DragEvent<HTMLDivElement>) => {
              dragStartHandler(event, item)
            }}
            onDragOver={allowDrop}
          ></Box>
        ))}
      </Grid>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #5aff;
        overflow: hidden;
        margin: 0;
    }
`

const Box = styled(CardMedia)`
  margin: 1em;
  width: 12em;
  height: 12em;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`

export default Drag
