import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6cbc5f94e34849cc815a48d011cd77b2'
    }
})