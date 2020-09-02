import {Rate} from '../models/rate';
import {Coin} from '../models/coin';
import {getCoin, getCoins} from '../repositories/rates.repository';

const allowedIds = [80, 90]

export async function getRates(): Promise<Rate[]> {
  const coins: Coin[] = await getCoins();
  const rates: Rate[] = coins.map(mapCoinToRate);
  return rates.filter((rate) => allowedIds.includes(rate.id));
}

export async function getRate(id: number): Promise<Rate> {
  const coin = await getCoin(id);
  const rate: Rate = mapCoinToRate(coin);
  return rate;
}

function mapCoinToRate(coin: Coin): Rate {
  return {
    id: Number(coin.id),
    name: coin.name,
    price: Number(coin.price_usd),
  };
}