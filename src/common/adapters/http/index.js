import axios from 'axios';

export const baseURL = 'https://challenge-api.aerolab.co';
export default axios.create({
  baseURL
});
