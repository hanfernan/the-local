import React from "react";
import Row from "../Row";
import Col from "../Col";

function aboutCard(props) {
    return (
        <div className="card" style={{marginTop:50}}>
            <div class="card-header" style={{fontWeight: "bolder"}}>
                <Row>
                    <Col size="md-9">
                        <h1 className="text-center">{props.bandName}</h1>
                    </Col>
                    <Col size="md-3">
                        <button className="btn btn-dark" style={{marginLeft: 3}}>Edit</button>
                    </Col>

                </Row>
                
                
            </div>
            <div class="card-body">
                <div>
                    <p>{props.bio}</p>
                </div>
                <Row>
                    <Col size="md-6">
                        <p>Genre: {props.genre}</p>
                        <button className="btn btn-dark">Edit</button>
                    </Col>
                    <Col size="md-6">
                        <p>Location: {props.location}</p>
                        <button className="btn btn-dark">Edit</button>
                    </Col>
                </Row>

            </div>
         </div>
    )
}

export default aboutCard;