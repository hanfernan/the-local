import React, { useRef } from 'react';
import API from '../../utils/API';
import "./Registration.css";
import "../../App.css";

function Signup() {

    const bandRef = useRef();
    const emailRef = useRef();
    const pwRef = useRef();
    const locationRef = useRef()
    const genreRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(bandRef.current.value)
        API.createBand({
            band_name: bandRef.current.value,
            email: emailRef.current.value,
            password: pwRef.current.value,
            location: locationRef.current.value,
            genre: genreRef.current.value
        })
    }
    return (
        <section className="signup-container">
            <h2 id="signup">SIGN UP</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="bandName-signup">Band Name</label>
                    <input
                        id="bandName-signup"
                        className="form-control"
                        type="text"
                        required
                        ref={bandRef}
                        placeholder="Enter band name here"
                    />
                </div>
                <div className="form-group">
                    <label for="location-signup">Location</label>
                    <select id="location-signup" name="location-signup">
                        <option value="Atlanta">Atlanta</option>
                        <option value="Chicago">Chicago</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="genre-signup">Genre</label>
                    <select id="genre-signup" name="genre-signup">
                        <option value="pop">Pop</option>
                        <option value="rock">Rock</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="email-signup">Email Address</label>
                    <input
                        id="email-signup"
                        className="form-control"
                        type="email"
                        required
                        ref={emailRef}
                        placeholder="Enter email here"
                    />
                </div>
                <div className="form-group">
                    <label for="password-signup">Password</label>
                    <input
                        id="password-signup"
                        className="form-control"
                        type="password"
                        required
                        ref={pwRef}
                        placeholder="Must be at least 8 characters"
                    />
                </div>
                {/* <h5>BAND NAME</h5>
                <input
                    id="name-signup"
                    required
                    ref={bandRef}
                    placeholder="Enter band name here"
                /> */}
                {/* <h5>EMAIL</h5>
                <input
                    id="email-signup"
                    type="EMAIL"
                    required
                    ref={emailRef}
                    placeholder="Enter email here"
                /> */}
                {/* <h5>LOCATION</h5>
                <input
                    id="location-signup"
                    required
                    ref={locationRef}
                    placeholder="Enter location here"
                /> */}
                {/* <h5>GENRE</h5>
                <input
                    id="genre-signup"
                    required
                    ref={genreRef}
                    placeholder="Enter genre here"
                /> */}
                {/* <h5>PASSWORD</h5>
                <input
                    id="password-signup"
                    type="password"
                    required
                    ref={pwRef}
                    placeholder="enter password here"
                /> */}
                <div>
                    <button type="submit" className="btn btn-dark">SIGN UP</button>
                </div>
            </form>
        </section>
    )
}

export default Signup;