import {getRate} from "./rates.service";
import { CoinType, Coin } from "../models/coin";
import * as RatesRepository from "../repositories/rates.repository";

jest.mock("../repositories/rates.repository");
const mockGetCoin = RatesRepository.getCoin as jest.Mock;

describe("rates service", () => {
  it("should get the rate from the repository", async () => {
    const coinId = 90;
    
    const coin: Coin = {
      id: "90",
      name: "BITCOIN",
      price_usd: "78"
    }
    mockGetCoin.mockResolvedValueOnce(coin);

    const actual = await getRate(coinId);

    expect(actual).toEqual({
      id: coinId,
      name: "BITCOIN",
      price: 78
    })
  })
});
