import dotenv from 'dotenv';
dotenv.config();

const main = async () => {
  console.log(process.env.JIRA_TOKEN);
};

main()
  .then(() => {
    console.log('The process is done');
  })
  .catch(() => {
    console.log('the process failed');
  });
