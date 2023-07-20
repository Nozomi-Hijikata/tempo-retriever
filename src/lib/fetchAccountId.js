import { constants } from '../constants/index.js';
import { config } from '../config.js';

export const fetchAccountId = async () => {
  const { email, jiraToken } = config;
  const { JIRA_API_BASE_URL } = constants;
  const url = `${JIRA_API_BASE_URL}/rest/api/3/myself`;
  const token = Buffer.from(`${email}:${jiraToken}`).toString('base64');

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
