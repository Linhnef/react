import React from "react"
import { Stepper, StepLabel, Step, Button, Typography } from "@material-ui/core"
import styled, { createGlobalStyle } from "styled-components"
import { useState } from "react"

const workFLow = [
  "Sketch app idea",
  "Research",
  "Creata a mockups of your app",
  "Build",
  "Optimal",
  "Launch",
  "Marketing",
]

function ProgressStep() {
  const [activeStep, setActiveStep] = useState<number>(0)
  return (
    <>
      <GlobleStyle />
      <Wrapper>
        <Stepper activeStep={activeStep} orientation="vertical">
          {workFLow.map((item) => (
            <Step key={item}>
              <StepLabel>{item}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <ButtonControl>
          <ButtonStyle
            disabled={activeStep === 0}
            onClick={() => {
              setActiveStep(activeStep - 1)
            }}
          >
            Prev
          </ButtonStyle>
          <ButtonStyle
            disabled={activeStep === workFLow.length - 1}
            onClick={() => {
              setActiveStep(activeStep + 1)
            }}
          >
            Next
          </ButtonStyle>
        </ButtonControl>
      </Wrapper>
    </>
  )
}

const GlobleStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

* {
  box-sizing: border-box;
}

body {
  font-family: 'Muli', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}
`

const Wrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: table;
`
const ButtonStyle = styled(Button)`
  background-color: rgba(0, 0, 0, 0.2) !important;
  margin: 1em;
`

const ButtonControl = styled.div`
  margin-left: 20%;
`

export default ProgressStep
