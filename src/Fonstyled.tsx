import { createGlobalStyle } from "styled-components"
import NunitoWoff from "./helpers/fonts/nunito-v16-latin/nunito-v16-latin-regular.woff"
import NunitoWoff2 from "./helpers/fonts/nunito-v16-latin/nunito-v16-latin-regular.woff2"

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Nunito';
  src: url(${NunitoWoff2}) format('woff2'),
       url(${NunitoWoff}) format('woff');
}
`

export default FontStyles
