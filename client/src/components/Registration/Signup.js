import React, { useRef } from 'react';
import API from '../../utils/API';
import "./Registration.css";

function Signup() {

    const bandRef = useRef();
    const emailRef = useRef();
    const pwRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(bandRef.current.value)
        API.createBand({
            band_name: bandRef.current.value,
            email: emailRef.current.value,
            password: pwRef.current.value,
        })
    }
    return(
        <section className="reg-card-container">
            <h2 id="signup">SIGN UP</h2>
            <form class="signup-form" onSubmit={handleSubmit}>
                <h3>BAND NAME</h3>
                <input 
                id="name-signup" 
                required
                ref={bandRef}
                placeholder="Enter band name here"
                />
                <h3>EMAIL</h3>
                <input 
                id="email-signup" 
                type="EMAIL" 
                required
                ref={emailRef}
                placeholder="Enter email here"
                />
                <h3>PASSWORD</h3>
                <input 
                id="password-signup"
                type="password" 
                required
                ref={pwRef}
                placeholder="enter password here"
                />
                <div>
                    <button type="submit">SIGN UP</button>
                </div>
            </form>
        </section>
    )
}

export default Signup;