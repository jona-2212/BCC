import axios from "axios";

export  const AxiosInstance = axios.create({
    baseURL: "https://bizconnect-00bd04e57942.herokuapp.com/api/v1"
});