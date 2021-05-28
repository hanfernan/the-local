import React, {useState, useRef, useEffect} from "react";
import Row from "../Row";
import Col from "../Col";
import API from "../../utils/API";


function AboutCard(props) {
    const [location, setLocation] = useState("");
    const [genre, setGenre] = useState("");
    const [locationValue, setLocationValue] = useState(1);
    const [genreValue, setGenreValue] = useState(1);
    const [state, editState] = useState(false)
    const [value, setValue] = useState({
        band_name:'',
        bio:'',
        genre_id:'',
        location_id:''
    });

    const bandRef= useRef();
    const bioRef= useRef();
    const genreRef="";
    const locationRef=""
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
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        API.updateBand(props.id,{band_name: value.band_name, genre_id: value.genre_id, 
            bio: value.bio,location_id:value.location_id } ).then(res => {
           console.log(res)
        })
        .catch((err) => {
            console.log(err);

        });

    }
    return (
        
        <div className="card" style={{marginTop:50}}>
            <div class="card-header" style={{fontWeight: "bolder"}}>
                {state ?
                <Row>
                    <Col size="md-9">
                        <input placeholder={props.bandName} ref={bandRef} onChange={(e)=>setValue({...value, band_name: e.target.value})}/>
                    </Col>
                    <Col size="md-3">
                        <button className="btn btn-dark" style={{marginLeft: 50}} onClick={() => editState(!state)}>Edit</button>
                    </Col>

                </Row> :
                <Row>
                     <Col size="md-9">
                         <h1 className="text-center">{props.bandName}</h1>
                     </Col>
                     <Col size="md-3">
                         <button className="btn btn-dark" style={{marginLeft: 50}} onClick={() => editState(!state)}>Edit</button>
                     </Col>
 
                 </Row>}
                
                
            </div>
            <div class="card-body">
                {state ?
                <div>
                    <input placeholder={props.bio} ref={bioRef} onChange={(e)=>setValue({...value, bio: e.target.value})}/>
                </div> :
                <div>
                    <p>Bio: {props.bio}</p>
                </div>}

                {state ?  
                <Row>
                    
                    <Col size="md-6">
                    <div className="form-group">
                        <label htmlFor="genre-signup">Genre</label>
                        <select
                            value={genreValue}
                            onChange={((e)=>{
                                setGenreValue(e.currentTarget.value)
                                setValue({...value, genre_id: e.currentTarget.value})
                            })}
                            id="genre-signup"
                            className="form-control"
                            name={genreRef}
                        >
                            {genreList}
                        </select>
                        console.log({value.genre_id});
                        console.log({genreRef})
                    </div>
                
                    </Col>
                    <Col size="md-6">
                    <div className="form-group">
                        <label htmlFor="location-signup">Location</label>
                        <select
                            value={locationValue}
                            onChange={((e)=>{
                                setLocationValue(e.currentTarget.value)
                                setValue({...value, location_id: e.currentTarget.value})
                            })}
                            id="location-signup"
                            className="form-control"
                            name={locationRef}
                        >
                            {locationsList}
                        </select>
                    </div>   
                       
                    </Col>
                    <button style= {{marginTop:20}} onClick={handleFormSubmit}>Submit </button>
                </Row> :  
                    <Row>
                        
                        <Col size="md-6">
                            <p>Genre: {props.genre}</p>
                    
                        </Col>
                        <Col size="md-6">
                            <p>Location: {props.location}</p>
                        
                        </Col>
                   </Row>
                    }
                    </div>
                  </div>
                );

}

 export default AboutCard;