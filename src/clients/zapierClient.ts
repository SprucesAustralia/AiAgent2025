import axios from 'axios';

const ZAPIER_URL = process.env.SEND_EMAIL_ZAPIER_URL; // Make sure to set this in your .env file

if (!ZAPIER_URL) {
  throw new Error('ZAPIER_URL is not defined in the environment variables.');
}

const zapierClient = axios.create({
  baseURL: ZAPIER_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Connection': 'keep-alive'
  },
});

export const postZapierData = async (endpoint: string, data: object) => {
  try {
    const response = await zapierClient.post(endpoint, data);
    console.info('Posting data to Zapier')
    return response.data;
  } catch (error) {
    console.error('Error posting data to Zapier:', error);
    throw error;
  }
};