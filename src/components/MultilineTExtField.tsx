import styled from "styled-components"
import { TextField } from "@material-ui/core"

const MultilineTExtField = styled(TextField).attrs((props) => ({
  variant: "outlined",
  multiline: true,
  rows: 5,
  ...props,
}))``

export default MultilineTExtField
