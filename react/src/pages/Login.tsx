import React, {useEffect} from "react";
import Api from "../Api";


export const Login = () => {
    useEffect(()=>{
        Api.get('/recipes').then(recipes=>{
        })
        Api.post('/login', {email: 'test@test.com', password: '123456'}).then(token=>{
            localStorage.setItem('token', JSON.stringify(token.data.token))
        })
    },[])
    return <div>Login</div>;
};
