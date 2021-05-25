import React from 'react';
import "./Registration.css";

function Login() {
    return (
        <section className="reg-card-container">
            <h2 id="login">LOG IN</h2>
            <form class="login-form">
                <h3>EMAIL</h3>
                <input id="email-login" type="EMAIL" />
                <h3>PASSWORD</h3>
                <input id="password-login" type="password" />
                <div>
                    <button class="login-form">LOGIN</button>
                </div>
            </form>
        </section>
    )
}

export default Login;