import axios from 'axios';
import { getCoin } from './rates.repository';
import { CoinType, Coin } from '../models/coin';

jest.mock('axios');
const mockGet = axios.get as jest.Mock;

describe('rates repository', () => {
  it('should call coinlore for individual coin', async () => {
    const etherium: Coin = {
      id: '80',
      symbol: 'ETH',
      name: 'Ethereum',
      nameid: 'ethereum',
      rank: 2,
      price_usd: '481.07',
      percent_change_24h: '10.57',
      percent_change_1h: '-0.39',
      percent_change_7d: '21.78',
      price_btc: '0.040200',
      market_cap_usd: '54071000495.58',
      volume24: "14616113162.8728351593017578125",
      volume24_native: "10520744166.1159725189208984375",
      csupply: '112397945.00',
      tsupply: '112397945',
      msupply: '',
    };

    mockGet.mockResolvedValueOnce({
      data: [
        etherium
      ],
    });

    const actual = await getCoin(CoinType.ETHERIUM);
    
    expect(actual).toEqual(etherium);
    expect(mockGet).toHaveBeenCalledWith("https://api.coinlore.net/api/ticker/?id=80")
  });
});
