import { config } from './config.js';
import { fetchAccountId } from './lib/fetchAccountId.js';
import dotenv from 'dotenv';
dotenv.config();

const main = async () => {
  await fetchAccountId();
};

main()
  .then(() => {
    console.log('The process is done');
  })
  .catch((e) => {
    console.log(`the process failed: ${e}`);
  });
