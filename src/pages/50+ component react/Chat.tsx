import { FormGroup, TextField, InputAdornment, Typography, Avatar } from "@material-ui/core"
import styled, { createGlobalStyle } from "styled-components"
import SendIcon from "@material-ui/icons/Send"
import CloseIcon from "@material-ui/icons/Close"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import { ChangeEvent, useState } from "react"
import { timeZone } from "../../helpers/timeZone"

type Message = {
  roll: boolean
  date: Date
  message: string
}

export const Chat = () => {
  const [messageTimeLine, setMessageTimeLine] = useState<Message[]>([])
  const [message, setMessage] = useState("")
  return (
    <>
      <GlobalStyle />
      <Container>
        <FormGroup>
          <Header>
            <CloseIcon />
            <ArrowDropDownIcon />
          </Header>
          <ChatBox>
            <DateContainet>
              <Typography variant="overline">{`${new Date().toDateString()}-${timeZone}`}</Typography>
            </DateContainet>
            {messageTimeLine
              .sort((a, b) => a.date.getTime() - b.date.getTime())
              .map((item, index) => {
                return item.roll ? (
                  <MessageContainer>
                    <MiniAvatar roll={item.roll} />
                    <Sender key={index}>
                      <Typography>{item.message}</Typography>
                    </Sender>
                  </MessageContainer>
                ) : (
                  <MessageContainer>
                    <MiniAvatar roll={item.roll} />
                    <Receiver key={index}>
                      <Typography>{item.message}</Typography>
                    </Receiver>
                  </MessageContainer>
                )
              })}
          </ChatBox>
          <ChatField
            value={message}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setMessage(event.target.value)
            }}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SendIcon
                    onClick={() => {
                      const newMessage: Message = { date: new Date(), message: message, roll: true }
                      setMessageTimeLine(
                        messageTimeLine.concat(newMessage, { date: new Date(), message: "... !!!", roll: false })
                      )
                      setMessage("")
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
        </FormGroup>
      </Container>
    </>
  )
}

const MessageContainer = styled.div`
  width: 20em;
  display: inline-block;
`

interface Roll {
  roll: boolean
}

const MiniAvatar = styled(Avatar)<Roll>`
  float: ${(props) => (props.roll ? "right" : "left")};
  height: 1.5em !important;
  width: 1.5em !important;
  margin: 0.35em 0;
`

const Header = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  & svg {
    float: right;
    margin: 0.2em;
    &:hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`

const Receiver = styled.div`
  margin: 0.5em 0;
  padding: 0.2em 0.5em;
  width: 12em;
  background-color: rgba(17, 98, 219, 0.2);
  float: left;
  border-radius: 0.5em;
  & p {
    font-size: 0.9em;
  }
`

const Sender = styled.div`
  margin: 0.5em 0;
  padding: 0.2em 0.5em;
  width: 12em;
  background-color: rgba(0, 0, 0, 0.2);
  float: right;
  border-radius: 0.5em;
  & p {
    font-size: 0.9em;
  }
`

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin : 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #5aff;
  }
`
const Container = styled.div`
  position: relative;
  background-color: #fafafa;
`

const ChatField = styled(TextField)`
  & input {
    height: 1.3em;
  }
  & svg:hover {
    cursor: pointer;
  }
`

const DateContainet = styled.div`
  width: inherit;
  padding: 0.5em;
  text-align: center;
  & span {
    font-size: 0.6em;
    font-weight: 900;
  }
`

const ChatBox = styled.div`
  width: 20em;
  height: 30em;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
    display: none;
  }
  &::-webkit-scrollbar {
    width: 0.3vw;
    background-color: #f5f5f5;
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
    display: none;
  }
`
