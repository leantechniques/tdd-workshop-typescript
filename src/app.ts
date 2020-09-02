import express from 'express';
import {rates} from './controllers/rates.controller';
import {exchange} from './controllers/exchange.controller';
const app = express();

app.get('/health', (req, res) => {
  res.status(200).send('');
});

app.use('/rates', rates);
app.use('/exchange', exchange);

export {app};
