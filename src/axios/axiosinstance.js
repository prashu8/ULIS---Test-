import axiosInstance from "axios";


const baseURL = 'http://pathakcorporation.com/api/Max_api_QA/v1.0.15/';

const axios = axiosInstance.create({
    baseURL: baseURL
});

export default axios;