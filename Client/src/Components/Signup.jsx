import { useState } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import axios from "axios";
import Header from "./Header";

export default function Signup() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [signup, setSignup] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:5000/api/auth/createNewUser",
      data: {
        name,
        phone,
      },
    };

    axios(configuration)
      .then(() => setSignup(true))
      .catch((err) => {
        new Error(err);
      });
  };

  return (
    <>
    <Header />
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h2>Sign Up!</h2>
            <Form onSubmit={(e) => handleSubmit(e)}>
              {/* email */}
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your Name"
                />
              </Form.Group>

              {/* password */}
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                />
              </Form.Group>

              {/* submit button */}
              <Button
                variant="primary"
                type="submit"
                onSubmit={(e) => handleSubmit(e)}
              >
                Submit
              </Button>

              {/* display success message */}
              {signup ? (
                <p className="text-success">You Are Registered Successfully</p>
              ) : (
                <p className="text-danger">You Are Not Registered</p>
              )}
            </Form>
          </Col>

          <Col xs={12} sm={12} md={6} lg={6}></Col>
        </Row>
      </Container>
    </>
  );
}
