import {getRate, getRates} from './rates.service';
import {CoinType, Coin} from '../models/coin';
import * as RatesRepository from '../repositories/rates.repository';

jest.mock('../repositories/rates.repository');
const mockGetCoin = RatesRepository.getCoin as jest.Mock;
const mockGetCoins = RatesRepository.getCoins as jest.Mock;

describe('rates service', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  })

  it('should get the rate from the repository', async () => {
    const coinId = 90;

    const coin: Coin = {
      id: '90',
      name: 'BITCOIN',
      price_usd: '78',
    };
    mockGetCoin.mockResolvedValueOnce(coin);

    const actual = await getRate(coinId);

    expect(actual).toEqual({
      id: coinId,
      name: 'BITCOIN',
      price: 78,
    });
  });

  it("should filter unwanted coins", async () => {
    const coin90: Coin = {
      id: '90',
      name: 'BITCOIN',
      price_usd: '78',
    };
    const coin91: Coin = {
      id: '91',
      name: 'DOGECOIN',
      price_usd: '99',
    };

    mockGetCoins.mockResolvedValueOnce([coin90, coin91]);

    const actual = await getRates();

    expect(mockGetCoins).toHaveBeenCalledWith();
    expect(mockGetCoins).toHaveBeenCalledTimes(1);
    expect(actual).toEqual([{
      id: 90,
      price: 78,
      name: "BITCOIN"
    }])
  });

  it("should get rates for all available coins ", async () => {
    const coin90: Coin = {
      id: '90',
      name: 'BITCOIN',
      price_usd: '78',
    };
    const coin80: Coin = {
      id: '80',
      name: 'ETHERIUM',
      price_usd: '66',
    };

    mockGetCoins.mockResolvedValueOnce([coin90, coin80]);

    const actual = await getRates();

    expect(mockGetCoins).toHaveBeenCalledWith();
    expect(mockGetCoins).toHaveBeenCalledTimes(1);
    expect(actual).toEqual([{
      id: 90,
      price: 78,
      name: "BITCOIN"
    },
    {
      id: 80,
      price: 66,
      name: "ETHERIUM"
    }])
  });
});
