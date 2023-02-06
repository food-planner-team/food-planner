import axios from "axios";

const Api = axios.create({
    baseURL: `http://food-planner.test/api/v1/`,
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
        const token = sessionStorage.getItem("TOKEN");
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => {
        if (error.response.status === 401) {
            sessionStorage.removeItem("TOKEN");
            location.replace("/login");
            // router.push({name: 'Login'})
        } else if (error.response.status === 404) {
            // router.push({name: 'NotFound'})
        }
        return error;
    }
);

export default Api;
