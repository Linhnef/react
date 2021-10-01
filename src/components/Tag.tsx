import { Typography } from "@material-ui/core"
import styled from "styled-components"

interface TagProps {
  children: string
}

function Tag(props: TagProps) {
  return (
    <Container>
      <Typography variant="h6">{props.children}</Typography>
    </Container>
  )
}

const Container = styled.div`
  background-color: #807d7d;
  display: inline-block;
  padding: 0.5em;
  margin: 0.3em 0.1em;
  border-radius: 0.5em;
  & h6 {
    font-size: 0.8em;
    font-weight: 900;
  }
`

export default Tag
