import express from 'express';
import { getRate, getRates } from '../services/rates.service';
const router = express.Router();

router.get('', async (req, res) => {
  const rates = await getRates();
  res.send(rates);
});

router.get('/:id', async (req, res) => {
  const {params} = req;
  const rate = await getRate(Number(params.id))
  res.send(rate)
});

export const rates = router;