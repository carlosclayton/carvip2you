import axios from "axios";

const api = axios.create({
    baseURL: 'http://10.155.153.54:3333'
});
export {api};

