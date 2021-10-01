import React, { ChangeEvent, useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Avatar, ListItem, TextField, Typography, ListItemIcon, ListItemText } from "@material-ui/core"
import { useRandomUserApiClient } from "../../hooks/useAppApiClient"
import useAsync from "../../hooks/useAsync"
import { result } from "lodash-es"
import { useEffect } from "react"
import { User } from "../../services/api/types/User"

function OnlineUserFilter() {
  const api = useRandomUserApiClient()
  const [users, setUsers] = useState<User[]>()
  const [search, setSearch] = useState("")
  const getRandomUser = useAsync(async (results: number) => {
    const response = await api.getRandomUser(results)
    if (!response) return
    setUsers(response)
  })
  useEffect(() => {
    getRandomUser.run(50)
  }, [])

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <SearchBox
            value={search}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
            placeholder="Search ..."
            variant="outlined"
          />
        </Header>
        <ListUser>
          {users?.map((item) => (
            <UserItem
              show={
                item.name.first.toString().toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                item.name.last.toString().toLocaleLowerCase().includes(search.toLocaleLowerCase())
              }
            >
              <ListItem>
                <ListItemIcon>
                  <Avatar src={item.picture.large} />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="h5">
                    {item.name.first} {item.name.last}
                  </Typography>
                  <Typography variant="h6">
                    {item.location.street.number} {item.location.street.name},{item.location.city}
                  </Typography>
                </ListItemText>
              </ListItem>
            </UserItem>
          ))}
        </ListUser>
      </Container>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin : 0;
        display : flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #5aff;
    }
`
interface UserProps {
  show: boolean
}
const UserItem = styled.div<UserProps>`
  display: ${(props) => (props.show ? "" : "none")};
`

const ListUser = styled.div`
  height: 23em;
  width: 100%;
  background-color: #fafafa;
  & h5 {
    font-size: 1em;
    font-weight: 900;
  }
  & h6 {
    font-size: 0.6em;
  }
  overflow-x: hidden;
  overflow-y: scroll;
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

const SearchBox = styled(TextField)`
  & fieldset {
    border: none;
  }

  & input {
    width: 60%;
    margin-left: 13%;
    padding: 0.2em 1em;
    border: 0.1em solid #000;
    border-radius: 1em;
    text-align: 2em;
    color: #fafafa;
    background-color: #858080;
  }
`

const Container = styled.div`
  width: 15em;
  height: 30em;
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 7em;
  background-color: #939699;
`
export default OnlineUserFilter
