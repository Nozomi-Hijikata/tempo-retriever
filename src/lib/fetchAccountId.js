import dotenv from 'dotenv';
import { constants } from '../constants/index.js';
import { config } from '../config.js';
dotenv.config();

export const fetchAccountId = async () => {
  console.log(config);
  const { email, jiraToken } = config;
  const { JIRA_API_BASE_URL } = constants;
  const url = `${JIRA_API_BASE_URL}/rest/api/3/myself`;
  const token = btoa(`${email}:${jiraToken}}`);

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Basic ${token}`,
      Accept: 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};
