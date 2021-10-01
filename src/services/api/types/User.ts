export type User = {
  name: {
    last: string
    first: string
  }
  location: {
    street: {
      number: number
      name: string
    }
    city: string
  }
  picture: {
    large: string
  }
}

export interface Product {
  id: string
  price: number
  amount: number
  description: string
}
