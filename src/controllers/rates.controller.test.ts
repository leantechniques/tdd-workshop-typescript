import request from 'supertest';
import {app} from '../app';
import {getRate, getRates} from '../services/rates.service';
import {Rate} from '../models/rate';

jest.mock('../services/rates.service.ts');
const mockGetRate = getRate as jest.Mock;
const mockGetRates = getRates as jest.Mock;

describe('rates controller', () => {
  it('should get rates for individual coin', async () => {
    const rate1: Rate = {
      id: 80,
      name: 'My Coin',
      price: 4.2,
    };
    mockGetRate.mockResolvedValue(rate1);

    const response = await request(app).get('/rates/80');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(rate1);
    expect(mockGetRate).toHaveBeenCalledWith(80);
  });

  it("should get rates for all coins", async () => {
    const rate1: Rate = {
      id: 80,
      name: 'My Coin',
      price: 4.2,
    };
    const rate2: Rate = {
      id: 90,
      name: 'My Coin',
      price: 4.2,
    };
    mockGetRates.mockResolvedValue([rate1, rate2]);

    const response = await request(app).get('/rates');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([rate1, rate2]);
    expect(mockGetRates).toHaveBeenCalledWith();
  })
});
