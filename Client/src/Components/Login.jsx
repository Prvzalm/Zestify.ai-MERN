
import axios from "axios";
import { useState } from "react";
import { Form, Button, Col, Container, Row, } from "react-bootstrap";
import Header from "./Header";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:5000/api/auth/login_with_phone",
      data: {
        phone,
      },
    };

    axios(configuration)
      .then(() => setLogin(true))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <Header />
    <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
    <Form onSubmit={(e) => handleSubmit(e)}>
      {/* login with phone */}
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your Phone Number"
        />
      </Form.Group>
      {/* submit button */}
      <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
        Login
      </Button>
      {login ? (
        <p className="text-success">You Are Logged in Successfully</p>
      ) : (
        <p className="text-danger">You Are Not Logged in</p>
      )}
    </Form>
    </Col>

          <Col xs={12} sm={12} md={6} lg={6}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;