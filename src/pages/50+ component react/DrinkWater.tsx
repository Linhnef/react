import { Button, makeStyles, Typography } from "@material-ui/core"
import { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"

const takes = [1, 2, 3, 4, 5, 6, 7, 8]

function DrinkWater() {
  const classes = useStyles()
  const [v, setV] = useState(0)
  return (
    <>
      <GloblStyle />
      <Container>
        <Typography variant="h3">Drinks water</Typography>
        <Typography variant="h5">Goal : 2 liters</Typography>

        <Glass>
          <Water v={v}></Water>
          <Typography variant="overline">1.75L </Typography>
          <Typography variant="overline">Remained</Typography>
        </Glass>
        <Typography variant="overline">Select how many glasses of water that you have drank</Typography>
        <div>
          {takes.map((item) => (
            <Take
              duration={(2 / 8) * item}
              value={v}
              onClick={() => {
                if (v === (2 / 8) * item) {
                  setV(v - 2 / 8)
                } else {
                  setV((2 / 8) * item)
                }
              }}
              classes={{ root: classes.root }}
            >
              250ML
            </Take>
          ))}
        </div>
      </Container>
    </>
  )
}
const Container = styled.div`
  width: 70vw;
`

interface TakeProps {
  duration: number
  value: number
}

const Take = styled(Button)<TakeProps>`
  background-color: ${(props) => (props.value < props.duration ? "#fafafa" : "#6ab3f8")};
`

const useStyles = makeStyles({
  root: {
    height: "8em",
    width: "2em",
    margin: "5em",
    border: "0.1em solid black",
  },
})

interface GlassProps {
  v: number
}

const Water = styled.div<GlassProps>`
  position: absolute;
  bottom: 0;
  width: 11.3vw;
  height: ${(props) => (props.v === 0 ? 0 : 69 * (props.v / 2))}vh;
  background-color: #6ab3f8;
  border-radius: 0 0 2.6em 2.6em;
  padding: 0.2em;
`

const Glass = styled.div`
  position: relative;
  width: 12vw;
  height: 70vh;
  background-color: #fafafa;
  border-radius: 0 0 3em 3em;
  border: 0.3em solid black;
  margin: 3em;
  margin-left: 25em;
  font-weight: 900;
`

const GloblStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #5aff;
        text-align: center;
    }
`

export default DrinkWater
