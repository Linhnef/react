import { Grid, IconButton, TextareaAutosize } from "@material-ui/core"
import React, { ChangeEvent } from "react"
import styled, { createGlobalStyle } from "styled-components"
import FiberNewIcon from "@material-ui/icons/FiberNew"
import DeleteIcon from "@material-ui/icons/Delete"
import CreateIcon from "@material-ui/icons/Create"
import { useState } from "react"

function Notes() {
  const [elements, setElements] = useState<number[]>([])
  return (
    <>
      <GlobalStyle />
      <AddNoteController onClick={() => {
          setElements(elements.concat(elements.length))
      }}>
        <AddNoteIcon />
      </AddNoteController>
      <Container xs={12} container>
        {elements.map((x) => (
          <Note />
        ))}
      </Container>
    </>
  )
}

const Note = () => {
  const [show, setShow] = useState(true)
  const [write, setWrite] = useState(false)
  const [text, setText] = useState("")
  return (
    <Item xs={3} show={show}>
      <TopItem>
        <IconButton>
          <Delete onClick={() => setShow(!show)} />
        </IconButton>
        <IconButton onClick={() => setWrite(!write)}>
          <Write />
        </IconButton>
      </TopItem>
      <TexArea
        value={text}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          setText(event.target.value)
        }}
        minRows={24}
        maxRows={28}
        readOnly={write}
      />
    </Item>
  )
}

const GlobalStyle = createGlobalStyle`
   * {
       box-sizing: border-box;
   }

   body {
        margin : 0;
        height: 100vh;
        background-color: #5aff;
   }
`

const AddNoteIcon = styled(FiberNewIcon)`
  height: 2em !important;
  width: 2em !important;
`

const AddNoteController = styled.div`
  position: fixed;
  right: 1em;
  top: 2em;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 0.5em;
  &:hover {
    cursor: pointer;
  }
`

const Container = styled(Grid)`
  margin-top: 5em;
`

interface ItemProps {
  show: boolean
}
const Item = styled(Grid)<ItemProps>`
  display: ${(props) => props.show ? "" : "none"};
  margin: 0 3.5em;
  background-color: #fafafa;
`
const TopItem = styled.div`
  position: relative;
  width: 100%;
  height: 9%;
  background-color: #85ff55;
`

const Delete = styled(DeleteIcon)`
  color: #000;
`
const Write = styled(CreateIcon)`
  color: #000;
`
const TexArea = styled(TextareaAutosize)`
  width: 90%;
  margin-left: 5%;
  border: none;
  &:focus {
    outline: none;
  }
`

export default Notes
