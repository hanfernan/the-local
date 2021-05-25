import React from 'react';
// import "Registration.css";

function Signup() {

    const bandRef = useRef();
    const emailRef = useRef();
    const pwRef = useRef();
    return(
        <section class="single-box">
            <h2 id="signup">SIGN UP</h2>
            <form class="signup-form">
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