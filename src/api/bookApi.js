import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_API_URL } = getEnvVariables();

const bookApi = axios.create({
    baseURL: VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
 
export default bookApi;