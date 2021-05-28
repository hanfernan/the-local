import React, {useState} from "react";
import Row from "../Row";
import Col from "../Col";
import API from "../../utils/API"

function AboutCard(props) {
    const [state, editState] = useState(false)
   
    
    handleFormSubmit = (e) => {
        e.preventDefault();
        API.updateBand(props.id,{body}).then(band => {
            console.log(band)
        })
        .catch((err) => {
            console.log(err);

        })

    }
    return (
        <div className="card" style={{marginTop:50}}>
            <div class="card-header" style={{fontWeight: "bolder"}}>
                <Row>
                    <Col size="md-9">
                        <h1 className="text-center">{props.bandName}</h1>
                    </Col>
                    <Col size="md-3">
                        <button className="btn btn-dark" style={{marginLeft: 3}} onClick={() => editState(!state)}>Edit</button>
                    </Col>

                </Row>
                
                
            </div>
            <div class="card-body">
                <div>
                    <p>{props.bio}</p>
                </div>
                {state ?  
                    <Row>
                    
                    <Col size="md-6">
                        <input placeholder={props.genre}  />
                
                    </Col>
                    <Col size="md-6">
                        <input placeholder={props.location} />
                       
                    </Col>
                    <button style= {{marginTop:20}}>Submit </button>
                </Row> :  
                    <Row>
                    
                    <Col size="md-6">
                        <p>Genre: {props.genre}</p>
                
                    </Col>
                    <Col size="md-6">
                        <p>Location: {props.location}</p>
                       
                    </Col>
                </Row>}
               

            </div>
         </div>
    )
}

export default AboutCard;