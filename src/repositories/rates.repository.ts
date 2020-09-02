import axios from "axios";
import { CoinType, Coin } from "../models/coin";

export async function getCoin(coinType: CoinType): Promise<Coin> {
  const {data} = await axios.get(`https://api.coinlore.net/api/ticker/?id=${coinType}`);
  return data[0];
}

//todo: getCoins
export async function getCoins(): Promise<Coin[]> {
  return []
}