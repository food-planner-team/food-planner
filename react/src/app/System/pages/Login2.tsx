import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import axios, { AxiosError } from "axios";
import "./Login.css";
import { useSignIn } from "react-auth-kit";

function Login(poprs: any) {
    const [error, setError] = useState("");
    const signIn = useSignIn();

    const onSubmit = (values: any) => {
        console.log("Values:", values);
        setError("");
        Api.post(values).then((r)=>{
        Api.defaults.headers.common["Authorization"] = `Bearer ${token?.slice(1, -1)}`;
        })
        const response = await axios.post(
            "http://food-planner.test/api/v1/login",
            values
        );

        signIn({
            token: response.data.token,
            expiresIn: 3600,
            tokenType: "Bearer",
            authState: { email: values.email },
        });
    } catch (err) {
        if (err && err instanceof AxiosError)
            setError(err.response?.data.message);
        else if (err && err instanceof Error) setError(err.message);

        console.log("Error: ", err);
    }
};

const formik = useFormik({
    initialValues: {
        email: "",
        password: "",
    },
    onSubmit,
});


);
}

export default Login;
