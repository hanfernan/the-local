import React, { useEffect, useRef, useState } from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import API from "../../utils/API";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function MyVerticallyCenteredModal(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [location, setLocation] = useState("");
  const [locationValue, setLocationValue] = useState(1);

  useEffect(() => {
    API.getLocations().then((response) => {
      setLocation(response.data);
    });
  }, []);

  const eventRef = useRef();
  const linkRef = useRef();
  const locationRef = "";

  const handleSubmit = (e) => {
    e.preventDefault();
    API.postEvent({
      event_name: eventRef.current.value,
      event_date: startDate,
      event_link: linkRef.current.value,
      location_id: locationValue,
      band_id: props.id,
    });
    props.onHide();
  };

  let locationsList =
    location.length > 0 &&
    location.map((item, i) => {
      return (
        <option value={item.id} key={i}>
          {item.location_name}
        </option>
      );
    });

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Enter your Event Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} controlId="formHorizontalEvent">
            <Form.Label column sm={2}>
              Event Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="event-name"
                placeholder="Event Name"
                ref={eventRef}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalLink">
            <Form.Label column sm={2}>
              Event Link
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="event-link"
                placeholder="Event URL Link"
                ref={linkRef}
              />
            </Col>
          </Form.Group>
        </Form>
        <Form.Group as={Row} controlId="formHorizontalLink">
          <p className="m-3">Event Date</p>
          <div className="ml-4 mt-2">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </Form.Group>
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
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" onClick={handleSubmit}>
          Save
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function AddEventForm(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add Event
      </Button>

      <MyVerticallyCenteredModal
        {...props}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default AddEventForm;
