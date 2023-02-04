import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthHeader, withAuthHeader } from "react-auth-kit";
const Api = axios.create({
    baseURL: "http://food-planner.test/api/v1",
});

export const useAxios = ({ url, method }) => {
    const token = useAuthHeader();
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        axios[method](`http://food-planner.test/api/v1${url}`, {
            headers: {
                Authorization: `${token()}`,
            },
        })
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, [method, url]);

    return { response, error, loading };
};

export default Api;
