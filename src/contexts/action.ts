import { Product } from "../services/api/types/Product"

export type Action = { type: "REMOVE"; id: string } | { type: "ADD"; item: Product }
