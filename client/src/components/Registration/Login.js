import React, { useState } from 'react';
import "./Registration.css";
import API from '../../utils/API';

function Login() {

    const [info, setInfo] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        API.login(info)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    return (
        <section className="reg-card-container">
            <h2 id="login">LOG IN</h2>
            <form class="login-form" onSubmit={handleSubmit}>
                <h3>EMAIL</h3>
                <input
                    id="email-login"
                    type="EMAIL"
                    name="email"
                    onChange={e => setInfo({ ...info, [e.target.name]: e.target.value })} />
                {/* square brackets allow you to insert the key */}
                <h3>PASSWORD</h3>
                <input
                    id="password-login"
                    type="password"
                    name="password"
                    onChange={e => setInfo({ ...info, [e.target.name]: e.target.value })}
                />
                <div>
                    <button class="login-form" type="submit">LOGIN</button>
                </div>
            </form>
        </section>
    )
}

export default Login;