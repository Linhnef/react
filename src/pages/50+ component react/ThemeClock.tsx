import { Button, Typography } from "@material-ui/core"
import { useState, useEffect } from "react"
import styled, { createGlobalStyle } from "styled-components"

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function ThemeClock() {
  const [theme, setTheme] = useState(false)
  const [hour, setHour] = useState<number>(0)
  const [minute, setMinute] = useState<number>(0)
  const [month, setMonth] = useState<number>(0)
  const [day, setDay] = useState<number>(0)
  const [second, setSecond] = useState<number>(0)
  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date()
      const hour = now.getHours()
      setHour(hour >= 13 ? hour % 12 : hour)
      setMinute(now.getMinutes())
      setSecond(now.getSeconds())
      setDay(now.getDay())
      setMonth(now.getMonth())
    }, 1000)
    return () => {
      clearInterval(clockInterval)
    }
  }, [])
  return (
    <>
      <GlobalStyle theme={theme} />
      <Theme onClick={() =>{
        setTheme(!theme)
      }} variant="outlined">Dark</Theme>
      <Container>
        <Hour transform={`translate(-50%, -100%) rotate(${scale(hour, 0, 12, 0, 360)}deg)`} />
        <Minute transform={`translate(-50%, -100%) rotate(${scale(minute, 0, 60, 0, 360)}deg)`} />
        <Second transform={`translate(-50%, -100%) rotate(${scale(second, 0, 60, 0, 360)}deg)`} />
        <Center />
      </Container>
      <Time>
        <Typography variant="h5">{`${days[day]}, ${months[month]}`}</Typography>
        <Typography variant="overline">
          {`0${hour}`.slice(-2) + " : " + `0${minute}`.slice(-2) + " : " + `0${second}`.slice(-2)}
        </Typography>
      </Time>
    </>
  )
}

interface ThemProps {
  theme: boolean
}

const GlobalStyle = createGlobalStyle<ThemProps>`
    @import url('https://fonts.googleapis.com/css?family=Heebo:300&display=swap');
    * {
    box-sizing: border-box;
    }
    body {
    font-family: 'Heebo', sans-serif;
    height: 100vh;
    display: flex;
    justify-content: center;
    overflow: hidden;
    margin: 0;
    text-align: center;
    background-color: ${(props) => (props.theme ? "#fafafa" : "#000")};
    }

`
interface ClockProps {
  transform: string
}

const Time = styled.div``

const Theme = styled(Button)`
  position: absolute;
  top: 20vh;
`

const Center = styled.div`
  position: absolute;
  top: 49.6%;
  left: 49.75%;
  padding: 0.1em;
  border: 0.1em solid #5aff;
  border-radius: 0.2em;
`

const Hour = styled.div<ClockProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 5em;
  width: 0.05em;
  transform-origin: bottom center;
  transform: all 0.5s ease-in;
  background-color: #000;
  transform: translate(-50%, -100%) rotate(0deg);
  transform: ${(props) => props.transform};
`
const Minute = styled.div<ClockProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 7em;
  width: 0.05em;
  transform-origin: bottom center;
  transform: all 0.5s ease-in;
  background-color: #000;
  transform: translate(-50%, -100%) rotate(0deg);
  transform: ${(props) => props.transform};
`

const Second = styled.div<ClockProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 7em;
  width: 0.05em;
  transform-origin: bottom center;
  transform: all 0.5s ease-in;
  background-color: #000;
  transform: translate(-50%, -100%) rotate(0deg);
  background-color: #e74c3c;
  transform: ${(props) => props.transform};
`

const Container = styled.div``

export default ThemeClock
