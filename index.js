import axios from 'axios'
import jwtTokenUtil from "./utils/jwtTokenUtil"

// http request 拦截器
axios.interceptors.request.use(
    config => {
        let jwtToken = jwtTokenUtil.readAccess();
        // 给http请求的header加上jwt-token
        config.headers['jwt-token'] = jwtToken;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);