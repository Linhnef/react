import { Typography, Button, Grid, CardMedia } from "@material-ui/core"
import styled, { createGlobalStyle } from "styled-components"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import { useState } from "react"
import { useEffect } from "react"
const RenderTime = () => {
  const [time, setTime] = useState("")
  useEffect(() => {
    let seconds = 0
    const increaseTime = () => {
      let m: string | number = Math.floor(seconds / 60)
      let s: string | number = seconds % 60
      m = m < 10 ? `0${m}` : m
      s = s < 10 ? `0${s}` : s
      setTime(`Time: ${m}:${s}`)
      seconds++
    }

    const timmer = setInterval(() => {
      increaseTime()
    }, 1000)

    return () => {
      clearInterval(timmer)
    }
  }, [])
  return { time }
}

function Game() {
  const [position, setPosition] = useState(1)
  const [inspect, setInspect] = useState("")
  return (
    <>
      <GlobalStyle />
      {position === 1 ? (
        <Start next={setPosition} />
      ) : position === 2 ? (
        <Setting next={setPosition} picture={setInspect} />
      ) : (
        <GamePlay inspect={inspect} />
      )}
    </>
  )
}

interface GamePlayProps {
  inspect: string
}

const GamePlay = (props: GamePlayProps) => {
  const randomPositon = () => {
    const top = Math.floor(Math.random() * 60) + 20
    const left = Math.floor(Math.random() * 60) + 20
    return { top, left }
  }
  const [goal1, setGoal1] = useState<{ top: number; left: number }>(randomPositon())
  const [goal2, setGoal2] = useState<{ top: number; left: number }>(randomPositon())
  const [score, setScore] = useState(0)
  const { time } = RenderTime()
  useEffect(() => {
    const random1 = () => {
      setGoal1(randomPositon())
    }

    const random2 = () => {
      setGoal2(randomPositon())
    }

    const clear2 = setInterval(() => {
      random2()
    }, 1000)

    const clear1 = setInterval(() => {
      random1()
    }, 600)
    return () => {
      clearInterval(clear1)
      clearInterval(clear2)
    }
  }, [])

  return (
    <GamePlayContainer>
      <Timer>
        <Typography>{time}</Typography>
      </Timer>
      <Score>
        <Typography>Score : {`0${score}`.slice(-2)}</Typography>
      </Score>
      <Insect onClick={() => setScore(score + 1)} top={goal1.top} left={goal1.left} image={props.inspect} />
      <Insect onClick={() => setScore(score + 1)} top={goal2.top} left={goal2.left} image={props.inspect} />
    </GamePlayContainer>
  )
}

interface InsectProp {
  top: number
  left: number
}

const Insect = styled(CardMedia)<InsectProp>`
  cursor: pointer;
  position: absolute;
  top: ${(props) => props.top}vh;
  right: ${(props) => props.left}vw;
  max-width: 4em;
  min-width: 4em;
  height: 4em;
`

interface LayoutProps {
  position: number
}

const Score = styled.div`
  position: absolute;
  top: 2em;
  right: 2em;
`

const Timer = styled.div`
  position: absolute;
  top: 2em;
  left: 2em;
`

const GamePlayContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  transition: transform ease-in-out 0.4s;
  & p {
    font-size: 2em;
    font-weight: 900;
  }
`

interface SettingProps {
  picture: (data: string) => void
  next: (data: number) => void
}

const Setting = (props: SettingProps) => {
  return (
    <Container>
      <Typography variant="h1">What is your "favorite" insect?</Typography>
      <ChooseContainer>
        <Choose xs={12} container>
          <Item
            onClick={() => {
              props.picture("http://pngimg.com/uploads/fly/fly_PNG3946.png")
              props.next(3)
            }}
            image="http://pngimg.com/uploads/fly/fly_PNG3946.png"
          ></Item>
          <Item
            onClick={() => {
              props.picture("http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png")
              props.next(3)
            }}
            image="http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png"
          ></Item>
          <Item
            onClick={() => {
              props.picture("http://pngimg.com/uploads/spider/spider_PNG12.png")
              props.next(3)
            }}
            image="http://pngimg.com/uploads/spider/spider_PNG12.png"
          ></Item>
          <Item
            onClick={() => {
              props.picture("http://pngimg.com/uploads/roach/roach_PNG12163.png")
              props.next(3)
            }}
            image="http://pngimg.com/uploads/roach/roach_PNG12163.png"
          ></Item>
        </Choose>
      </ChooseContainer>
    </Container>
  )
}
const ChooseContainer = styled.div`
  width: 60vw;
  height: 7em;
  margin-top: 3em;
`
const Choose = styled(Grid)`
  height: 10em;
`

const Item = styled(CardMedia)`
  border: 1px solid #fafafa;
  max-width: 10em;
  min-width: 10em;
  height: 10em;
  margin: 0.5em;
  &:hover {
    cursor: pointer;
    background-color: #fafafa;
  }
`
interface StartProp {
  next: (data: number) => void
}

const Start = (props: StartProp) => {
  return (
    <Container>
      <Typography variant="h1">Catch The Insect</Typography>
      <Button onClick={() => props.next(2)} variant="outlined">
        <PlayArrowIcon />
        Play
      </Button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  & h1 {
    font-size: 5em;
    font-weight: 900;
  }
  & button {
    color: #fafafa;
    background-color: rgba(0, 0, 0, 0.2);
  }
`

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
        background-color: #516dff;
        color: #fff;
        font-family: 'Press Start 2P', sans-serif;
        height: 100vh;
        overflow: hidden;
        margin: 0;
        text-align: center;
    }
`

export default Game
