import { Slider } from "@material-ui/core"
import styled from "styled-components"
export const PrettoSlider = styled(Slider).attrs((props) => ({ ...props }))`
  &.MuiSlider-root {
    color: #52af77;
    height: 0.5em;
  }
  & .MuiSlider-thumb {
    height: 1.5em;
    width: 1.5em;
    background-color: #fafafa;
    border: 0.1em solid currentColor;
    margin-top: -0.5em;
    margin-left: -0.8em;
    &:hover {
      box-shadow: inherit;
    }
    &:focus {
      box-shadow: inherit;
    }
    &:active {
      box-shadow: inherit;
    }
  }
  & .MuiSlider-valueLabel {
    left: calc(-50% - 0.25em);
  }
  & .MuiSlider-track {
    height: 0.5em;
    border-radius: 0.25em;
  }
  & .MuiSlider-rail {
    height: 0.5em;
    border-radius: 0.25em;
  }
`
