import { Menu, MenuItem, Typography, Button } from "@material-ui/core"
import { MouseEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled, { createGlobalStyle } from "styled-components"
import { translate } from "../../i18n"
import { RootState } from "../../store/Language"
import { setLanguage } from "../../store/langugeActions"

function Translate() {
  const dispath = useDispatch()
  const { language } = useSelector((state: RootState) => state.languge)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleChangeLanguage = (value: string) => {
    dispath(setLanguage(value))
  }
  return (
    <>
      <GlobalStyle />
      <LanguageMenu onClick={handleClick}>Languge</LanguageMenu>
      <MenuLanguage
        elevation={0}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Item
          onClick={() => {
            handleChangeLanguage("VI")
            handleClose()
          }}
        >
          VI
        </Item>
        <Item
          onClick={() => {
            handleChangeLanguage("EN")
            handleClose()
          }}
        >
          EN
        </Item>
        <Item
          onClick={() => {
            handleChangeLanguage("DE")
            handleClose()
          }}
        >
          DE
        </Item>
      </MenuLanguage>
      <TranSlateContainer>
        <Typography>{translate("introText", language)}</Typography>
        <Typography variant="overline">{translate("aboutUsText", language)}</Typography>
      </TranSlateContainer>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin : 0;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        text-align: center;
        background-image: url('https://previews.123rf.com/images/rostislavsedlacek/rostislavsedlacek1805/rostislavsedlacek180500032/102531020-top-view-of-office-work-desk-with-laptop-on-white-background.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
`

const LanguageMenu = styled(Button)`
  position: fixed;
  top: 1em;
  right: 2em;
  color: #fafafa;
  background-color: rgba(0, 0, 0, 0.5);
`

const TranSlateContainer = styled.div`
  & span {
    font-weight: 900;
    font-size: 1.2em;
    color: #444242;
  }
  & p {
    font-weight: 900;
    font-size: 1.7em;
    width: 60vw;
    margin-left: 20vw;
  }
`

const Item = styled(MenuItem)`
  width: 6em;
  justify-content: center;
`

const MenuLanguage = styled(Menu)`
  & ul {
    background-color: rgba(0, 0, 0, 0.2);
  }
`

export default Translate
