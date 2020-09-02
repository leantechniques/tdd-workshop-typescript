import {Holding} from './holding';

export interface User {
  id: number;
  name: string;
  holdings: Holding[];
  cash: number;
}
