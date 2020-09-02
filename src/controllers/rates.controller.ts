import express from 'express';
import { getRate } from '../services/rates.service';
import { CoinType } from '../models/coin';
const router = express.Router();

router.get('', (req, res) => {});

router.get('/:id', (req, res) => {
  const {params} = req;
  const rate = getRate(CoinType[params.id])
  res.send(rate)
});

export const rates = router;