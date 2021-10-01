import { TextareaAutosize, Typography } from "@material-ui/core"
import { createGlobalStyle } from "styled-components"
import Tag from "../../components/Tag"
import styled from "styled-components"
import { ChangeEvent, useState } from "react"

function ChoicePicker() {
  const [tags, setTags] = useState<string[]>([])
  return (
    <>
      <GlobalStyle />
      <Typography variant="overline">Enter your choice</Typography>
      <FillBox
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          setTags(event.target.value.split(","))
        }}
        placeholder="Enter your choice ..."
        minRows={8}
      />
      <TagContainer>
        {tags.map((item) => (
          <Tag>{item}</Tag>
        ))}
      </TagContainer>
    </>
  )
}

const TagContainer = styled.div`
  width: 30vw;
`

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

    * {
    box-sizing: border-box;
    }

    body {
    background-color: #2b88f0;
    font-family: 'Muli', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    text-align: center;
    }
`
const FillBox = styled(TextareaAutosize)`
  border: none;
  display: block;
  width: 30vw;
  font-family: inherit;
  padding: 1em;
  margin: 0 0 1em;
  font-size: 1em;
`

export default ChoicePicker
