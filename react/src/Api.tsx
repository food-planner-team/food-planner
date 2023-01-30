import React from "react";
import axios from 'axios';
const Api = axios.create({
    baseURL: 'http://food-planner.test/api/v1'
});
const token = localStorage.getItem('token')
Api.defaults.headers.common['Authorization'] = `Bearer ${ JSON.parse(token)}`;

// Also add/ configure interceptors && all the other cool stuff

Api.interceptors.request

export default Api;
