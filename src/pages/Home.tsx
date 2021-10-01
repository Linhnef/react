import {
  Grid,
  IconButton,
  MenuItem,
  Menu,
  ListItemText,
  FormGroup,
  CardMedia,
  Typography,
  ListItem,
} from "@material-ui/core"
import { useState, MouseEvent } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { useLinks } from "../hooks/useLinks"
import { NavLink } from "react-router-dom"
import MoreVertIcon from "@material-ui/icons/MoreVert"

function Home() {
  const link = useLinks.common
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <GlobalStyle />
      <Container xs={12} container>
        <LeftMenu xs={4}>
          <Information>
            <FormGroup>
              <ProfilePicture image="https://github.com/Linhnef/PUBLIC-IMAGE/blob/master/179136903_2952632318346013_845482275316958314_n.jpg?raw=true" />
              <Typography variant="overline">Nguyen Bao Linh</Typography>
              <Typography variant="overline">Frontend</Typography>
              <Typography variant="h4">OUTSTANDING</Typography>
            </FormGroup>
          </Information>
          <FormGroup>
            <LeftMenuItem>
              <ListItem>
                <ListItemText>
                  <Typography>Introduce</Typography>
                </ListItemText>
              </ListItem>
            </LeftMenuItem>
            <LeftMenuItem>
              <ListItem>
                <ListItemText>
                  <Typography>50 styled-component react project</Typography>
                </ListItemText>
                <IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={handleClick}>
                  <MoreVertIcon />
                </IconButton>
                <Menu id="long-menu" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
                  <PopupMenuItem onClick={handleClose}>
                    <NavLink to={link.animationCount()}>Animation count</NavLink>
                  </PopupMenuItem>
                  <PopupMenuItem onClick={handleClose}>
                    <NavLink to={link.animationNv()}>Animation navigation</NavLink>
                  </PopupMenuItem>
                  <PopupMenuItem onClick={handleClose}>
                    <NavLink to={link.autoEffectText()}>AutoEffect text</NavLink>
                  </PopupMenuItem>
                  <PopupMenuItem onClick={handleClose}>
                    <NavLink to={link.blurryLoading()}>Blurry loading</NavLink>
                  </PopupMenuItem>
                  <PopupMenuItem onClick={handleClose}>
                    <NavLink to={link.rippleButton()}>Rippe button</NavLink>
                  </PopupMenuItem>
                  <PopupMenuItem onClick={handleClose}>
                    <NavLink to={link.cart()}>Cart</NavLink>
                  </PopupMenuItem>
                  <PopupMenuItem onClick={handleClose}>
                    <NavLink to={link.chat()}>Chat</NavLink>
                  </PopupMenuItem>
                  <PopupMenuItem onClick={handleClose}>
                    <NavLink to={link.choicePicker()}>Choice picker</NavLink>
                  </PopupMenuItem>
                  <PopupMenuItem onClick={handleClose}>
                    <NavLink to={link.contentPlacerholder()}>Placeholder content</NavLink>
                  </PopupMenuItem>
                  <PopupMenuItem onClick={handleClose}>
                    <NavLink to={link.game()}>Game</NavLink>
                  </PopupMenuItem>
                </Menu>
              </ListItem>
            </LeftMenuItem>
            <LeftMenuItem>
              <ListItem>
                <ListItemText>
                  <Typography>School and self-learning project</Typography>
                </ListItemText>
              </ListItem>
            </LeftMenuItem>
            <LeftMenuItem>
              <ListItem>
                <ListItemText>
                  <Typography>Interests</Typography>
                </ListItemText>
              </ListItem>
            </LeftMenuItem>
          </FormGroup>
        </LeftMenu>
      </Container>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        height: 100vh;
        background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    }
`
const LeftMenuItem = styled.div`
  position: relative;
  & p {
    font-weight: 900;
  }
`

const ProfilePicture = styled(CardMedia)`
  max-width: 15em;
  min-width: 15em;
  height: 8em;
  border-radius: 50%;
  border: 0.3em solid #c3cfe2;
`

const Information = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 2em 0;
  & span {
    font-size: 1em;
    font-weight: 900;
  }
  & h4 {
    font-weight: 900;
  }
`
const PopupMenuItem = styled(MenuItem)`
  & a {
    text-decoration: none;
    color: #000;
  }
`
const Container = styled(Grid)`
  width: 100%;
  height: 100vh;
`
const LeftMenu = styled(Grid)`
  background-color: #fafafa;
  height: 100vh;
  width: 100%;
`

export default Home
