import React from "react";
import axios from "axios";
import { useAuthHeader, withAuthHeader } from "react-auth-kit";
const Api = axios.create({
    baseURL: "http://food-planner.test/api/v1",
});
// const token = localStorage.getItem("token");
const token = withAuthHeader();
console.log("token: " + token);
Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

// Also add/ configure interceptors && all the other cool stuff

// Api.interceptors.request;

export default Api;
