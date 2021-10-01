import { Button, ListItem, Typography, ListItemIcon, ListItemText } from "@material-ui/core"
import { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import Checkbox from "@material-ui/core/Checkbox"
import CircleChecked from "@material-ui/icons/CheckCircleOutline"
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked"

interface Quiz {
  question: string
  a: string
  b: string
  c: string
  d: string
  correct: string
}

const quizData: Quiz[] = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
]

function QuizApp() {
  const [quiz, setQuiz] = useState(0)
  const [answer, setAnswer] = useState("")
  const [correct, setCorrect] = useState(0)
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Container>
          {quiz === quizData.length ? (
            <>
              <ResultContainer>
                <Typography>You answered {`${correct}/${quizData.length}`} questions correctly</Typography>
                <Button
                  onClick={() => {
                    setQuiz(0)
                    setCorrect(0)
                    setAnswer("")
                  }}
                >
                  Reload
                </Button>
              </ResultContainer>
            </>
          ) : (
            <>
              <Typography variant="h2">{quizData[quiz].question}</Typography>
              <ListItem>
                <ListItemIcon>
                  <Checkbox
                    icon={<CircleUnchecked />}
                    checked={answer === "a"}
                    onClick={() => setAnswer("a")}
                    checkedIcon={<CircleChecked />}
                  />
                </ListItemIcon>
                <ListItemText>
                  <Typography>{quizData[quiz].a}</Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Checkbox
                    icon={<CircleUnchecked />}
                    checked={answer === "b"}
                    onClick={() => setAnswer("b")}
                    checkedIcon={<CircleChecked />}
                  />
                </ListItemIcon>
                <ListItemText>
                  <Typography>{quizData[quiz].b}</Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Checkbox
                    icon={<CircleUnchecked />}
                    checked={answer === "c"}
                    onClick={() => setAnswer("c")}
                    checkedIcon={<CircleChecked />}
                  />
                </ListItemIcon>
                <ListItemText>
                  <Typography>{quizData[quiz].c}</Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Checkbox
                    icon={<CircleUnchecked />}
                    checked={answer === "d"}
                    onClick={() => setAnswer("d")}
                    checkedIcon={<CircleChecked />}
                  />
                </ListItemIcon>
                <ListItemText>
                  <Typography>{quizData[quiz].d}</Typography>
                </ListItemText>
              </ListItem>
              <Button
                onClick={() => {
                  if (answer === quizData[quiz].correct) {
                    setCorrect(correct + 1)
                    setAnswer("")
                  }
                  setAnswer("")
                  setQuiz(quiz + 1)
                }}
              >
                Submit
              </Button>
            </>
          )}
        </Container>
      </Layout>
    </>
  )
}
const ResultContainer = styled.div`
  height: 22em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  & p {
    font-size: 1.5em;
    font-weight: 900;
  }
`

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #fafafa;
    }
`
const Layout = styled.div`
  padding: 2em;
  border-radius: 0.5em;
  box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
`

const Container = styled.div`
  position: relative;
  height: 22em;
  width: 25em;
  & h2 {
    text-align: center;
    font-size: 1.6em;
    font-weight: 900;
  }
  & button {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #8e44ad;
  }
`

export default QuizApp
