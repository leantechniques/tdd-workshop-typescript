import { CoinType } from "./coin";

export interface Rate {
  id: CoinType,
  name: string,
  price: number
}