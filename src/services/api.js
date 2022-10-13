import axios from "axios";

const api = axios.create({
    baseURL: 'http://10.155.152.213:3333'
});
export {api};

