import axios from 'axios';

const SYNTHFLOW_API_BASE_URL = 'https://api.synthflow.ai'; // Replace with the actual base URL of the SynthFlow API
const SYNTHFLOW_API_KEY = process.env.SYNTHFLOW_API_KEY; // Make sure to set this in your .env file

if (!SYNTHFLOW_API_KEY) {
  throw new Error('SYNTHFLOW_API_KEY is not defined in the environment variables.');
}

const synthflowClient = axios.create({
  baseURL: SYNTHFLOW_API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${SYNTHFLOW_API_KEY}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
});

export const getSynthFlowData = async (endpoint: string, params?: object) => {
  try {
    const response = await synthflowClient.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching data from SynthFlow API:', error);
    throw error;
  }
};

export const postSynthFlowData = async (endpoint: string, data: object) => {
  try {
    const response = await synthflowClient.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data to SynthFlow API:', error);
    throw error;
  }
};