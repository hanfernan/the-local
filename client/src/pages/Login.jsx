import React, { useState, useEffect, useRef } from 'react'
import API from "../utils/API"
import "../components/Registration/Registration.css"
import "../App.css"
import { useHistory } from 'react-router-dom'

function Login() {
    const [location, setLocation] = useState("");
    const [genre, setGenre] = useState("");
    const [locationValue, setLocationValue] = useState(1);
    const [genreValue, setGenreValue] = useState(1);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const [info, setInfo] = useState({
      email: "",
      password: "",
    });

    const history = useHistory()
  
    const handleSubmit = (e) => {
      e.preventDefault();
      API.login(info)
        .then(
            (res) => {
                console.log(res.data)
                history.push("/")
            }
        )
        .catch((err) => console.log(err));
    };


  
    useEffect(() => {
      API.getLocations().then((response) => {
        setLocation(response.data);
      });
    }, []);
  
    useEffect(() => {
      API.getGenres().then((response) => {
        setGenre(response.data);
      });
    }, []);
  
    const bandRef = useRef();
    const emailRef = useRef();
    const pwRef = useRef();
    const locationRef = "";
    const genreRef = "";
    const bioRef = useRef();
  
    const handleSignupSubmit = (e) => {
      e.preventDefault();
      API.createBand({
        band_name: bandRef.current.value,
        email: emailRef.current.value,
        password: pwRef.current.value,
        location_id: locationValue,
        genre_id: genreValue,
        bio: bioRef.current.value,
      })
      .then(
          res => {console.log(res.data)
              history.push('/')
            })
            .catch(err => {
                console.log(err)
            })
    };
  
    let locationsList =
      location.length > 0 &&
      location.map((item, i) => {
        return <option value={item.id}>{item.location_name}</option>;
      });
  
    let genreList =
      genre.length > 0 &&
      genre.map((item, i) => {
        return <option value={item.id}>{item.genre_name}</option>;
      });

    return isLoggedIn ? (<section className="login-container">
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
          <div>
            <button className="btn btn-dark" type="submit">
              LOGIN
            </button>
            <button type="link" onClick={()=> setIsLoggedIn(false)}>
                Need to signup? Click here
            </button>
          </div>
        </form>
      </section>):(<section className="signup-container">
      <h2 id="signup">SIGN UP</h2>
      <form className="signup-form" onSubmit={handleSignupSubmit}>
        <div className="form-group">
          <label htmlFor="bandName-signup">Band Name</label>
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
          <label htmlFor="location-signup">Location</label>
          <select
            value={locationValue}
            onChange={(e) => setLocationValue(e.currentTarget.value)}
            id="location-signup"
            className="form-control"
            name={locationRef}
          >
            {locationsList}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="genre-signup">Genre</label>
          <select
            value={genreValue}
            onChange={(e) => setGenreValue(e.currentTarget.value)}
            id="genre-signup"
            className="form-control"
            name={genreRef}
          >
            {genreList}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="bio-signup">Bio</label>
          <input
            id="bio-signup"
            class="form-control"
            type="text"
            required
            ref={bioRef}
            placeholder="Enter bio here"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email-signup">Email Address</label>
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
          <label htmlFor="password-signup">Password</label>
          <input
            id="password-signup"
            className="form-control"
            type="password"
            required
            ref={pwRef}
            placeholder="Must be at least 8 characters"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-dark">
            SIGN UP
          </button>
          <button type="link" onClick={()=> setIsLoggedIn(true)}>
                Already have an account? Log in
            </button>
        </div>
      </form>
    </section>) 
  }
  
  export default Login;