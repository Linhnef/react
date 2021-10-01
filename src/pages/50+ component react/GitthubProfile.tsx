import { ListItem, ListItemIcon, TextField, Avatar, ListItemText, Typography, Grid } from "@material-ui/core"
import React from "react"
import { useState, ChangeEvent } from "react"
import { useEffect } from "react"
import styled, { createGlobalStyle } from "styled-components"
import useAsync from "../../hooks/useAsync"
import { useGItthubApi } from "./ApiClient"
import { Gitthub, Repository } from "./Model"

function GitthubProfile() {
  const [searchValue, setSearchValue] = useState("")
  const [repositorys, setRepositorys] = useState<Repository[] | null>()
  const [user, setUser] = useState<Gitthub | null>()
  const api = useGItthubApi
  const getGitthubUser = useAsync(async (data: string) => {
    window.removeEventListener("keydown", () => {})
    const response = await api.getGitthubUser(data)
    if (!response) {
      setUser(null)
      return
    }
    setUser(response)
  })
  const getRespository = useAsync(async (data: string) => {
    const response = await api.getRepository(data)
    if (!response) {
      setRepositorys(null)
      return
    }
    setRepositorys(response)
  })

  return (
    <>
      <GlobalStyle />
      <SearchBox
        value={searchValue}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setSearchValue(event.target.value)
        }}
        onKeyDown={(event: any) => {
          if (event.key === "Enter") {
            getGitthubUser.run(searchValue)
            getRespository.run(searchValue)
            setSearchValue("")
          }
        }}
        placeholder="Search ..."
        variant="outlined"
      />
      {repositorys && user ? (
        <Box>
          <ListItem>
            <ListItemIcon>
              <AvatatGit src={user.avatar_url} />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h5">{user.login}</Typography>
              <Typography variant="overline">{user.bio}</Typography>
              <Grid xs={12} container>
                <Grid xs={4} container>
                  <Typography variant="h6">{user.followers} Followers</Typography>
                </Grid>
                <Grid xs={4} container>
                  <Typography variant="h6">{user.following} Following</Typography>
                </Grid>
                <Grid xs={4} container>
                  <Typography variant="h6"> {user.public_repos} Repository</Typography>
                </Grid>
              </Grid>
              <Tag>
                {repositorys.map((item, index) => (
                  <Typography variant="overline">
                    <a href={item.html_url}>{item.name}</a>
                  </Typography>
                ))}
              </Tag>
            </ListItemText>
          </ListItem>
        </Box>
      ) : (
        <Box>
          <Typography variant="h5">UNKNOW</Typography>
        </Box>
      )}
    </>
  )
}

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100vh;
        background-color: #5aff;
    }
`

const AvatatGit = styled(Avatar)`
  height: 5em !important;
  width: 5em !important;
  border: 0.2em solid white;
  margin: 1em;
`

const Tag = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 50em;
  & span a {
    text-decoration: none;
    margin-right: 1em;
  }
`
const Box = styled.div`
  padding: 1em;
  margin: 1em 0;
  border: 0.1em solid white;
  border-radius: 0.5em;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(0, 0, 0, 0.1);
  background-color: #6ab3fc;
  & h5 {
    font-size: 1.2em;
    font-weight: 900;
  }
  & span {
    font-size: 0.9em;
  }
  & h6 {
    font-size: 1em;
    font-weight: 600;
  }
`

const SearchBox = styled(TextField)`
  width: 30em;
  padding: 1em;
  background-color: #6ab3fc;

  & label.Mui-focused {
    color: white;
  }
  & .MuiInput-underline:after {
    border-bottom-color: white;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: white;
      border-radius: 0.5em;
    }
    &:hover fieldset {
      border-color: white;
    }
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`

export default GitthubProfile
