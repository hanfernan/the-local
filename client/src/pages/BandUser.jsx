import React, {useEffect, useState} from "react";
import Col from "../components/Col"
import Row from "../components/Row"
import AboutCard from "../components/aboutCard"
import API from "../utils/API";
import Container from "../components/Container/index";
import UpdateLinks from "../components/SocialMedia/UpdateLinks";
import AddEventForm from "../components/UpcomingEvents/AddEventForm";
import UserEventTable from "../components/UpcomingEvents/UserEventTable"


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
        API.getUserBand().then(band => {
            console.log(band)
            console.log(band.data);
            console.log(band.data.id)
            setBandInfo({...bandInfo, 
                bandName:band.data.band_name, genre:band.data.genre.genre_name, bio: band.data.bio, 
                location: band.data.location.location_name, email:band.data.email, id:band.data.id })
            console.log(bandInfo.bandName)
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
                   <Col size="md-8">
                   <UpdateLinks id={bandInfo.id}/>
                   </Col>
                   <UserEventTable/>
                   <Col size="md-6">
                   <AddEventForm id={bandInfo.id} />
                   </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BandUser