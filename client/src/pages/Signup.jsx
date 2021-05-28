import React, { useEffect, useRef, useState } from "react";
import API from "../utils/API"
import "../components/Registration/Registration.css"
import "../App.css"
import { useHistory } from 'react-router-dom'
 
function Signup(props) {

    const history = useHistory()

    const [location, setLocation] = useState("");
    const [genre, setGenre] = useState("");
    const [locationValue, setLocationValue] = useState(1);
    const [genreValue, setGenreValue] = useState(1);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

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
  
    const handleSubmit = (e) => {
      e.preventDefault();
      API.createBand({
        band_name: bandRef.current.value,
        email: emailRef.current.value,
        password: pwRef.current.value,
        location_id: locationValue,
        genre_id: genreValue,
        bio: bioRef.current.value,
      });
      console.log(locationValue);
      history.push('/');
      setIsLoggedIn(true)
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
  
    return (
      <section className="signup-container">
        <h2 id="signup">SIGN UP</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
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
            <button type="submit" className="btn btn-dark" >
              SIGN UP
            </button>
          </div>
        </form>
      </section>
    );
  }
  
  export default Signup;
  