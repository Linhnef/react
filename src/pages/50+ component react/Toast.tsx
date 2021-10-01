import styled, { createGlobalStyle } from "styled-components"
import { useState } from "react"
import { Button, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core"
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone"

function Toast() {
  const [active, setActive] = useState(false)
  const [toastMessage, setToastMessage] = useState<string>("")
  const handleToggle = () => {
    setActive(true)
    setToastMessage("Cần [C]bao nhiêu lâu để em tìm kiếm? Cần bao nhiêu [E7]tiền đổi một mớ [Am]bình yên?")
    setTimeout(() => {
      setActive(false)
    }, 3000)
  }
  return (
    <>
      <GlobalStyle />
      <Button
        onClick={() => {
          handleToggle()
        }}
        variant="outlined"
      >
        Notify
      </Button>
      <ToastUI description={toastMessage} active={active} />
    </>
  )
}
interface ToastUIProps {
  active: boolean
  description: string
}
const ToastUI = (props: ToastUIProps) => {
  return (
    <Notify active={props.active}>
      <Header>
        <ListItem>
          <ListItemIcon>
            <NotificationsNoneIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="overline">Warning !!!</Typography>
          </ListItemText>
        </ListItem>
      </Header>
      <Hor />
      <Typography variant="overline">{props.description}</Typography>
    </Notify>
  )
}
const Hor = styled.hr`
  width: 100%;
`

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: #5aff;
    }
`

interface NotifyProps {
  active: boolean
}

const Header = styled.div`
  width: 100%;
  height: 2em;
  display: contents;
`

const Notify = styled.div<NotifyProps>`
  position: absolute;
  top: 2em;
  right: 2em;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  width: 18em;
  border: 0.1em solid #000;
  background-color: rgba(247, 244, 244, 0.4);
  border-radius: 0.4em;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) => (props.active ? `translateX(0%)` : `translateX(400%)`)};
  & span {
    padding: 0.2em;
    font-size: 0.6em;
    font-weight: 900;
    text-align: center;
  }
`
export default Toast
