import { Typography } from "@material-ui/core"
import { Grid } from "@material-ui/core"
import styled, { createGlobalStyle } from "styled-components"

function Expend() {
  return (
    <>
      <GlobleStyle />
      <Wrapperr>
        <Image url="https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
          <h3>Wonderful Bridge</h3>
        </Image>
        <Image url="https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
          <h3>The Beaty Fall Forest</h3>
        </Image>
        <Image url="https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80">
          <h3>City In Winter</h3>
        </Image>
        <Image url="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80">
          <h3>Beach on Dawn</h3>
        </Image>
        <Image url="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
          <h3>Mountains</h3>
        </Image>
      </Wrapperr>
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

const Wrapperr = styled(Grid)`
  width: 90vw;
  margin-left: 5vw;
  display: flex;
`

interface ImageProps {
  url: string
}

const Image = styled(Grid)<ImageProps>`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  flex: 0.5;
  color: #fff;
  cursor: pointer;
  margin: 1em;
  position: relative;
  -webkit-transition: all 700ms ease-in;
  &:hover {
    border-radius: 3em;
    flex: 5;
    & h3 {
      opacity: 1;
      color: #f3e7e7;
    }
  }
  & h3 {
    position: absolute;
    top: 0;
    opacity: 0;
    display: inline-block;
    color: #f3e7e7;
    font-size: 1em !important;
    padding: 40%;
    font-weight: 900;
    -webkit-transition: all 700ms ease-in;
  }
`

export default Expend
