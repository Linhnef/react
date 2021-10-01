import styled, { createGlobalStyle } from "styled-components"
import { IconButton, TextField, makeStyles } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import { useState, ChangeEvent } from "react"

function HiddenSearchWiget() {
  const classes = useStyles()
  const [active, setActive] = useState(false)
  const [value, setValue] = useState("")
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <SearchWrapper>
        <Input
          className={active ? "expend-input" : ""}
          placeholder="Search ..."
          value={value}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value)
          }}
          InputProps={{
            className: classes.input,
          }}
        />
        <SearchButton className={active ? "move-btn" : ""}>
          <IconButton
            onClick={() => {
              setActive(!active)
              setValue("")
            }}
          >
            <Icon />
          </IconButton>
        </SearchButton>
      </SearchWrapper>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  body {transform: translateX(198px);
        background-image: linear-gradient(90deg, #7d5fff, #17161a);
        font-family: 'Roboto', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        overflow: hidden;
        margin: 0;
    }
`

const SearchWrapper = styled.div`
  position: relative;
  top: 0;
  height: 2.8em;
  border-radius: 0.5em;
  & .move-btn {
    transform: translateX(13em);
  }
  & .expend-input {
    width: 13em;
  }
`

const useStyles = makeStyles({
  input: {
    height: "2.8em",
    fontSize: "1em",
  },
})

const Icon = styled(SearchIcon)`
  color: #000;
`

const Input = styled(TextField).attrs((props) => ({ variant: "outlined", ...props }))`
  background-color: #fff;
  border: 0;
  height: 2.8em;
  width: 2.8em;
  transition: width 0.3s ease;
  border-radius: 0.5em;
  &:focus {
    outline: none;
  }
`

const SearchButton = styled.div`
  background-color: #fff;
  border: 0;
  cursor: pointer;
  font-size: 1em;
  position: absolute;
  top: 0;
  left: 0;
  height: 2.8em;
  width: 2.8em;
  border-radius: 0.5em;
  transition: transform 0.3s ease;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`
export default HiddenSearchWiget
