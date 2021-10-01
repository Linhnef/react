import { createContext, ReactNode, useReducer } from "react"
import { cartReducer } from "./cartReucer"
import { defaultCartState } from "./cartReucer"
import { Product } from "../services/api/types/Product"

const initialItems: Product[] = []

export const CartContext = createContext({
  items: initialItems,
  totalAmount: 0,
  addItem: (item: Product) => {},
  removeItem: (id: string) => {},
})

interface CartProviderProp {
  children: ReactNode
}

export const CartProvider = (props: CartProviderProp) => {
  const [state, dispatch] = useReducer(cartReducer, defaultCartState)

  const addItemToCartHandler = (item: Product) => {
    dispatch({ type: "ADD", item: item })
  }

  const removeItemFromCartHandler = (id: string) => {
    dispatch({ type: "REMOVE", id: id })
  }

  const cartContext = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}
