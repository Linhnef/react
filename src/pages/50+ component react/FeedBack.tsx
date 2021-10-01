import { Button, Grid, Typography } from "@material-ui/core"
import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied"
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied"
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied"
import FavoriteIcon from "@material-ui/icons/Favorite"
import { useState } from "react"

function FeedBack() {
  const [done, setDone] = useState(false)
  const [rate, setRate] = useState("Satisfied")
  return (
    <>
      <GlobalStyle />
      <Container>
        {done ? (
          <>
            <Thank>
              <FavoriteIcon />
              <Typography variant="h6">Thank You!</Typography>
              <Typography variant="h5">Feedback: {rate}</Typography>
              <Typography>We'll use your feedback to improve our customer support</Typography>
            </Thank>
          </>
        ) : (
          <>
            <Title>
              <Typography variant="h6">How satisfied are you with our customer support performance?</Typography>
            </Title>
            <Rating xs={12} container>
              <Grid xs={4}>
                <RatingItem onClick={() => setRate("Unhappy")} select={rate === "Unhappy"}>
                  <SentimentVeryDissatisfiedIcon />
                  <Typography>Unhappy</Typography>
                </RatingItem>
              </Grid>
              <Grid xs={4}>
                <RatingItem onClick={() => setRate("Neutral")} select={rate === "Neutral"}>
                  <SentimentSatisfiedIcon />
                  <Typography>Neutral</Typography>
                </RatingItem>
              </Grid>
              <Grid xs={4}>
                <RatingItem onClick={() => setRate("Satisfied")} select={rate === "Satisfied"}>
                  <SentimentVerySatisfiedIcon />
                  <Typography>Satisfied</Typography>
                </RatingItem>
              </Grid>
            </Rating>
            <Button onClick={() => setDone(true)} variant="outlined">
              Send feedback
            </Button>
          </>
        )}
      </Container>
    </>
  )
}

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

interface RatingProps {
  select: boolean
}

const Rating = styled(Grid)`
  margin-top: 2em;
`
const RatingItem = styled.div<RatingProps>`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 6em;
  margin-left: 1em;
  box-shadow: ${(props) => (props.select ? "0 0 10px rgba(0, 0, 0, 0.1)" : "")};
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  & svg {
    width: 4em !important;
    height: 4em !important;
    color: #f8e004;
  }
  & p {
    font-size: 0.8em;
  }
`

const Title = styled.div`
  width: 70%;
  text-align: center;
  & h6 {
    font-size: 0.9em;
    font-weight: 900;
  }
`
const Thank = styled.div`
  text-align: center;
  & svg {
    color: red;
    height: 2em !important;
    width: 2em !important;
  }
  & h6 {
    margin: 0.5em;
    font-weight: 900;
  }
  & h5 {
    margin: 0.5em;
    font-weight: 900;
  }
  & p {
    margin: 0.5em;
    font-size: 0.9em;
    color: gray;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  width: 25em;
  height: 18em;
  background-color: #fafafa;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`

export default FeedBack
