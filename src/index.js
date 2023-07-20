import 'dotenv/config';
import { fetchAccountId } from './lib/fetchAccountId.js';
const main = async () => {
  const data = await fetchAccountId();
  console.debug(data);
};

main()
  .then(() => {
    console.log('The process is done');
  })
  .catch((e) => {
    console.log(`the process failed: ${e}`);
  });
