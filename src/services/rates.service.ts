import {Rate} from '../models/rate';
import {CoinType} from '../models/coin';
import { getCoin } from '../repositories/rates.repository';

export async function getRates(...args: CoinType[]): Promise<Rate[]> {
  return [];
}

export async function getRate(id: number): Promise<Rate> {
  const coin = await getCoin(id);
  const rate: Rate = {
    id: id,
    name: coin.name,
    price: Number(coin.price_usd)
  }
  return rate;
}