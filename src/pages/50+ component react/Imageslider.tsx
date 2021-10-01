import { CardMedia } from "@material-ui/core"
import React, { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
const data: { image: string; caption: string }[] = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
    caption: "San Francisco",
  },
  {
    image:
      "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    caption: "Scotland",
  },
  {
    image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    caption: "Darjeeling",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    caption: "San Francisco",
  },
  {
    image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
    caption: "Scotland",
  },
  {
    image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    caption: "Darjeeling",
  },
  {
    image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
    caption: "San Francisco",
  },
  {
    image:
      "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
    caption: "Scotland",
  },
  {
    image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
    caption: "Darjeeling",
  },
]

function Imageslider() {
  const [index, setIndex] = useState(0)
  return (
    <>
      <GlobalStyle />
      <Box>
        <ImageContainer>
          <Slider image={data[index].image} />
        </ImageContainer>
        <Footer>
          {data.map((item, index) => (
            <ImageListItem onClick={() => setIndex(index)} key={index} image={item.image} />
          ))}
        </Footer>
      </Box>
    </>
  )
}

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
const ImageListItem = styled(CardMedia)`
  height: 100%;
  max-width: 5.5em;
  min-width: 5.5em;
  margin: 0.2em;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    opacity: 0.9;
    border: 0.1em solid black;
  }
`

const ImageContainer = styled.div`
  overflow: hidden;
`

const Slider = styled(CardMedia)`
  max-width: 100%;
  height: 80vh;
  margin: 0.5em 0;
  border-radius: 1em;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`

const Box = styled.div`
  width: 90vw;
`

const Footer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  overflow-x: scroll;
  overflow-y: hidden;
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

export default Imageslider
