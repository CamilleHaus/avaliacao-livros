import axios from "axios";

const axiosAPI = axios.create({
    baseURL: "http://localhost:3333/",
    timeout: 5000,
    header: {
        'ContentType': 'application/json',
}
});

export default axiosAPI;