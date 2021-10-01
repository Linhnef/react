import { Button, Typography } from "@material-ui/core"
import React from "react"
import { useContext } from "react"
import { createGlobalStyle } from "styled-components"
import { CartContext } from "../../contexts/CartContext"

function Cart() {
  const { addItem, items, removeItem, totalAmount } = useContext(CartContext)
  return (
    <>
      <GlobalStyle />
      <Typography variant="overline">{items.length}</Typography>
      <Button
        onClick={() => {
          addItem({
            amount: 1,
            description: "good",
            id: "1",
            price: 23,
          })
        }}
        variant="outlined"
      >
        ADD
      </Button>
      <Button
        onClick={() => {
          removeItem("1")
        }}
        variant="outlined"
      >
        Remove
      </Button>
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
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #5aff;
    }
`

export default Cart
