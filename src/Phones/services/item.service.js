import HttpClient from '../../util/HttpClient';
import {API_BASE_URL} from '../../constants';

export const getAllPhonesAPI = () => HttpClient.get(`${API_BASE_URL}/phones`).then((res) => res.data)
