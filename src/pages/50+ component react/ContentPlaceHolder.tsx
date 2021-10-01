import { Avatar, ListItemAvatar, ListItem, ListItemText, Paper, Typography } from "@material-ui/core"
import React, { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Skeleton } from "@material-ui/lab"
import { useEffect } from "react"

interface data {
  avatar: string
  image: string
  name: string
  born: string
  title: string
  description: String
}

const loadData = {
  avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  title: "Lorem ipsum dolor sit amet",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
  image:
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
  name: "John Doe",
  born: "Oct 08, 2020",
}

function ContentPlaceHolder() {
  const [data, setData] = useState<data>()
  const [load, setLoad] = useState(false)
  useEffect(() => {
    const LoadData = () => {
      setData(loadData)
    }
    setLoad(true)
    setTimeout(LoadData, 1000)
    setLoad(false)
  }, [])
  return (
    <>
      <GLobalStyle />
      {load ? (
        <Card>
          <Skeleton variant="rect" width={"100%"} height={"15em"} animation="wave" />
          <Skeleton variant="text" width={"100%"} height={"15em"} animation="wave" />
          <Skeleton variant="circle" width={40} height={40} animation="wave" />
        </Card>
      ) : (
        <Card>
          <Image src={data?.image} />
          <Content>
            <Typography variant="h6">{data?.title}</Typography>
            <Typography>{data?.description}</Typography>
          </Content>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={data?.avatar} />
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="h6">{data?.name}</Typography>
              <Typography variant="overline">{data?.born}</Typography>
            </ListItemText>
          </ListItem>
        </Card>
      )}
    </>
  )
}

const GLobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin : 0;
        display : flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
`

const Content = styled.div`
  width: 100%;
  margin: 1em;
  & p {
    margin: 0.5em 0;
  }
`

const Card = styled.div`
  width: 20em;
  border-radius: 1em;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  & h6 {
    font-weight: 900;
    font-size: 1.2em;
  }
`
const Image = styled.img`
  max-width: 100%;
  height: 15em;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
`

export default ContentPlaceHolder
