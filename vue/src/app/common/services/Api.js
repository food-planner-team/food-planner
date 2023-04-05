import axios from "axios";

const Api = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    // Get variable from env file in vue

});
// const refreshToken = async () => {
//     try {
//         const response = await this.Api.post('/refresh-token', {
//             grant_type: 'refresh_token'
//         })
//         return response
//     } catch (error) {
//         this.handleError(error)
//     }
// }
// Api.defaults.withCredentials = true
Api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("TOKEN");
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem("TOKEN");
            location.replace("/logowanie");
        } else if (error.response.status === 404) {
        }
        return error;
    }
);

export default Api;
