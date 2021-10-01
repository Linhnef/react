import React, { ChangeEvent, useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Slider, Typography } from "@material-ui/core"

function RangeSlier() {
  const [value, setValue] = useState<number | string | Array<number | string>>(30)

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    setValue(newValue)
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value))
  }
  const handleBlur = () => {
    if (value < 0) {
      setValue(0)
    } else if (value > 100) {
      setValue(100)
    }
  }

  return (
    <>
      <GlobalStyle />
      <Typography id="discrete-slider" gutterBottom>
        Value
      </Typography>
      <SliderRange
        value={typeof value === "number" ? value : 0}
        onChange={handleSliderChange}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        min={0}
        max={100}
        step={10}
      />
    </>
  )
}

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
        background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    }
`
const SliderRange = styled(Slider)`
  &.MuiSlider-root {
    width: 20em;
  }
`

export default RangeSlier
