import { FormGroup, Grid, TextField, Typography } from "@material-ui/core"
import React, { ChangeEvent } from "react"
import styled, { createGlobalStyle } from "styled-components"

function Image3D() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Form>
          <ContentContainer>
            <Typography variant="h5">Verify Your Account</Typography>
            <Typography variant="h6">
              We emailed you the six digit code to cool_guy@email.com Enter the code below to confirm your email
              address.
            </Typography>
          </ContentContainer>

          <Code xs={12} container>
            <Item xs={2}>
              <TextField
                id="first"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  if (parseInt(event.target.value) && parseInt(event.target.value) < 10)
                    document.getElementById("second")?.focus()
                }}
                variant="outlined"
                placeholder="0"
              />
            </Item>
            <Item xs={2}>
              <TextField
                id="second"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  if (parseInt(event.target.value) && parseInt(event.target.value) < 10)
                    document.getElementById("third")?.focus()
                }}
                variant="outlined"
                placeholder="0"
              />
            </Item>
            <Item xs={2}>
              <TextField
                id="third"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  if (parseInt(event.target.value) && parseInt(event.target.value) < 10)
                    document.getElementById("fourth")?.focus()
                }}
                variant="outlined"
                placeholder="0"
              />
            </Item>
            <Item xs={2}>
              <TextField
                id="fourth"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  if (parseInt(event.target.value) && parseInt(event.target.value) < 10)
                    document.getElementById("five")?.focus()
                }}
                variant="outlined"
                placeholder="0"
              />
            </Item>
            <Item xs={2}>
              <TextField
                id="five"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  if (parseInt(event.target.value) && parseInt(event.target.value) < 10)
                    document.getElementById("six")?.focus()
                }}
                variant="outlined"
                placeholder="0"
              />
            </Item>
            <Item xs={2}>
              <TextField id="six" variant="outlined" placeholder="0" />
            </Item>
          </Code>
          <Footer>
            <Typography>
              This is design only. We didn't actually send you an email as we don't have your email, right?
            </Typography>
          </Footer>
        </Form>
      </Container>
    </>
  )
}

const ContentContainer = styled.div`
  margin-top: 3em;
`

const Footer = styled.div`
  width: 70%;
  margin: 3em 0;
  margin-left: 15%;
  padding: 1em;
  border-radius: 0.5em;
  background-color: rgba(0, 0, 0, 0.1);
`
const Code = styled(Grid)`
  margin: 1.5em 0;
`

const Item = styled(Grid)`
  & input {
    text-align: center;
    font-size: 5em;
    width: 0.9em;
  }
`

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
        background-color: center;
    }
`

const Container = styled.div`
  height: 30em;
  width: 45em;
  border: 0.2em solid #000;
  border-radius: 1em;
  text-align: center;
`

const Form = styled(FormGroup)`
  & h5 {
    font-weight: 900;
    font-size: 1.5em;
  }
  & h6 {
    font-weight: 900;
    font-size: 1em;
    color: gray;
  }
`

export default Image3D
