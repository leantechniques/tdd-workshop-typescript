import {app} from '../app';
import { getRate } from '../services/rates.service';
import { CoinType } from '../models/coin';

app.get('/rates', (req, res) => {});

app.get('/rates/:id', (req, res) => {
  const {params} = req;
  const rate = getRate(CoinType[params.id])
  res.send(rate)
});

export const rates = app;