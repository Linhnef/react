import { makeStyles, Typography } from "@material-ui/core"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import YouTubeIcon from "@material-ui/icons/YouTube"
import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import { useState } from "react"
import { useEffect } from "react"

function IncremntCounter() {
  const classes = useStyles()
  const [twitter, setTwitter] = useState<number>(0)
  const [youtube, setYoutube] = useState<number>(0)
  const [facebook, setFacebook] = useState<number>(0)

  const load = async (target: number, flow: number = 0, actions: (data: number) => void) => {
    const step = target / 200
    if (flow < target) {
      flow = flow + step
      actions(Math.ceil(flow))
    }
    setTimeout(load, 1)
    load(target, flow, actions)
  }
  useEffect(() => {
    const up = () => {
      load(12000, 0, setTwitter)
      load(5000, 0, setYoutube)
      load(7500, 0, setFacebook)
    }
    up()
  }, [])
  return (
    <>
      <GlobalStyle />
      <Container>
        <Box>
          <TwitterIcon classes={{ root: classes.root }} />
          <Typography variant="h2">{twitter}</Typography>
          <Typography variant="h4">Twitter followers</Typography>
        </Box>
        <Box>
          <YouTubeIcon classes={{ root: classes.root }} />
          <Typography variant="h2">{youtube}</Typography>
          <Typography variant="h4">YouTube Subscribers</Typography>
        </Box>
        <Box>
          <FacebookIcon classes={{ root: classes.root }} />
          <Typography variant="h2">{facebook}</Typography>
          <Typography variant="h4">Facebook Fans</Typography>
        </Box>
      </Container>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        display : flex;
        align-items: center;
        justify-content: center;
        background-color: #5aff;
        height: 100vh;
        width : 100vw;
        color: #fff;
        font-family: 'Roboto Mono', sans-serif;

        @media (max-width: 580px){
            flex-direction: column;
        }
    }
`
const useStyles = makeStyles({
  root: {
    height: "4em",
    width: "4em",
  },
})
const Container = styled.div``

const Box = styled.div`
  align-items: center;
  display: inline-block;
  padding: 1em;
  margin: 1em;
  text-align: center;
  & h4 {
    font-size: 1.2em;
  }
`

export default IncremntCounter
