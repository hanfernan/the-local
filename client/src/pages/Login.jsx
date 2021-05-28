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
  
    // const handleSignupSubmit = (e) => {
    //   e.preventDefault();
    //   API.createBand({
    //     band_name: bandRef.current.value,
    //     email: emailRef.current.value,
    //     password: pwRef.current.value,
    //     location_id: locationValue,
    //     genre_id: genreValue,
    //     bio: bioRef.current.value,
    //   })
    //   .then(
    //       res => {console.log(res.data)
    //           history.push('/')
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // };
  
    // let locationsList =
    //   location.length > 0 &&
    //   location.map((item, i) => {
    //     return <option value={item.id}>{item.location_name}</option>;
    //   });
  
    // let genreList =
    //   genre.length > 0 &&
    //   genre.map((item, i) => {
    //     return <option value={item.id}>{item.genre_name}</option>;
    //   });

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
          <div>
            <button className="btn btn-dark" type="submit">
              LOGIN
            </button>
            <button type="link" onClick={()=> setIsLoggedIn(false)}>
                Need to signup? Click here
            </button>
          </div>
        </form>
      </section>
    )
  }
  
  export default Login;