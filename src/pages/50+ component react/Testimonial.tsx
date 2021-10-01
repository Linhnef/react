import { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import LinearProgress from "@material-ui/core/LinearProgress"
import { useEffect } from "react"
import { Avatar, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core"
import FormatQuoteIcon from "@material-ui/icons/FormatQuote"

function Testimonial() {
  const [progress, setProgress] = useState(0)
  const { quote } = useGet()
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0
        }
        return Math.min(oldProgress + 1, 100)
      })
    }, 100)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      <GlobalStyle />
      <Container>
        <Timer variant="determinate" value={progress} />
        <QuoteContainer>
          <Quote />
          <Text>
            <Typography>{testimonials[quote].text} </Typography>
          </Text>
          <Quote />
        </QuoteContainer>
        <UserInformationContainer>
          <ListItem>
            <ListItemIcon>
              <Picture src={testimonials[quote].photo} />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h5">{testimonials[quote].name}</Typography>
              <Typography variant="h6">{testimonials[quote].position}</Typography>
            </ListItemText>
          </ListItem>
        </UserInformationContainer>
      </Container>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat');

    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif ;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #fafafa;
    }
`

const Picture = styled(Avatar)`
  &.MuiAvatar-root {
    width: 2.5em;
    height: 2.5em;
  }
`
const UserInformationContainer = styled.div`
  width: 100%;
  & li {
    height: 5em;
    margin-left: 13em;
    & h5 {
      font-size: 1em;
      font-weight: 900;
      color: #fafafa;
    }
    & h6 {
      font-size: 0.9em;
      color: #fafafa;
    }
  }
`

const QuoteContainer = styled.div`
  text-align: center;
  display: flex;
  margin: 1em;
`

const Quote = styled(FormatQuoteIcon)`
  width: 10% !important;
`
const Text = styled.div`
  width: 80%;
  & p {
    color: #fafafa;
    font-size: 1.1em;
  }
`

const Timer = styled(LinearProgress)`
  width: 80%;
  margin-left: 10%;
`

const Container = styled.div`
  width: 40em;
  padding: 1em;
  background-color: #5aff;
  border-radius: 1em;
`

export const useGet = () => {
  const [quote, setQuote] = useState(0)
  useEffect(() => {
    let index = 0
    const clockInterval = setInterval(() => {
      if (index === testimonials.length) {
        setQuote(0)
        index = 0
      } else {
        setQuote(index)
      }
      index++
    }, 5000)
    return () => {
      clearInterval(clockInterval)
    }
  }, [])
  return { quote }
}
interface Model {
  name: string
  position: string
  photo: string
  text: string
}
const testimonials: Model[] = [
  {
    name: "Miyah Myles",
    position: "Marketing",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
    text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
  },
  {
    name: "June Cha",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!",
  },
  {
    name: "Iida Niskanen",
    position: "Data Entry",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
  },
  {
    name: "Renee Sims",
    position: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
  },
  {
    name: "Jonathan Nunfiez",
    position: "Graphic Designer",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    text: "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
  },
  {
    name: "Sasha Ho",
    position: "Accountant",
    photo: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text: "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!",
  },
  {
    name: "Veeti Seppanen",
    position: "Director",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.",
  },
]

export default Testimonial
