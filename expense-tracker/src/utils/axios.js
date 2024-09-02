import axios from "axios";

//create our own axios instance.
const axiosInstance = axios.create({
    baseURL: "http://localhost:9000",
});

export default axiosInstance;
