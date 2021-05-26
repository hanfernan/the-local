import React, {useEffect, useState} from "react";
import Col from "../components/Col"
import Row from "../components/Row"
import AboutCard from "../components/aboutCard"
import API from "../utils/API";
import Container from "../components/Container/index"


function BandUser () {
    const [bandInfo, setBandInfo] = useState({
        bandName: '',
        genre:'',
        bio: '',
        location: '',
        email: '',
        id: ''
    })

    useEffect(() => {
        API.getBand().then(band => {
            console.log(band.data);
            console.log(bandInfo.id)
            setBandInfo({...bandInfo, ...band.data})
        })
        .catch(err => console.log(err))
    }, [])
    return(
        <div>
            <Container>
                <Row>
                   <Col size="md-6">
                       <AboutCard
                       bandName={bandInfo.bandName}
                       genre={bandInfo.genre}
                       bio={bandInfo.bio}
                       location={bandInfo.location}
                       email={bandInfo.email}
                       id={bandInfo.id} />
                   </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BandUser