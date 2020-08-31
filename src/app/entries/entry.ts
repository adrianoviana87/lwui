import { Transaction } from './transaction';

export interface Entry {
  title: string;
  date: string;
  tags: Array<string>;
  transactions: Array<Transaction>;
}
