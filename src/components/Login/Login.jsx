import React from 'react';
import api from "../../utils/Api";
import "./Login.scss"
const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const login = e.target[0].value
        const password = e.target[1].value
        console.log(login, password)
        api.login(login, password)
            .then(res => {
                localStorage.token = res.accessToken
                window.location.reload()
            })
            .catch(e => console.log(e))
    }
    return (
        <div className="login">
            <h2 className="login__title">Auth</h2>
            <form className='login__form' onSubmit={handleSubmit}>
                <input className="login__form-input" type="text" placeholder="Login"/>
                <input className="login__form-input" type="text" placeholder="password"/>
                <button className="login__form-button" type={"submit"}>Submit</button>
            </form>
        </div>
    );
};

export default Login;