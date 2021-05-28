import React, { useState } from "react";
import API from "../../utils/API";
import "./Registration.css";
import "../../App.css";

function Login() {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    API.login(info)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <section className="login-container">
      <h2 id="login">LOG IN</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bandLoginEmail">Email Address</label>
          <input
            id="bandLoginEmail"
            name="email"
            className="form-control"
            type="email"
            placeholder="Enter email"
            aria-describedby="emailHelp"
            onChange={(e) =>
              setInfo({ ...info, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="bandPassword">Password</label>
          <input
            type="password"
            id="bandPassword"
            name="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) =>
              setInfo({ ...info, [e.target.name]: e.target.value })
            }
          />
        </div>
        {/* <h5>EMAIL</h5> */}
        {/* <input
                    id="email-login"
                    type="EMAIL"
                    name="email"
                    onChange={e => setInfo({ ...info, [e.target.name]: e.target.value })} /> */}
        {/* square brackets allow you to insert the key */}
        {/* <h5>PASSWORD</h5> */}
        {/* <input
                        id="password-login"
                        type="password"
                        name="password"
                        onChange={e => setInfo({ ...info, [e.target.name]: e.target.value })}
                    /> */}
        <div>
          <button className="btn btn-dark" type="submit">
            LOGIN
          </button>
        </div>
      </form>
    </section>
  );
}

export default Login;
