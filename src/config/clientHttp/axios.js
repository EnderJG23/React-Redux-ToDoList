import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: process.env.REACT_APP_HOST_URL
});

export default clienteAxios;