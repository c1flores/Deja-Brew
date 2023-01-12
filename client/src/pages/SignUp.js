import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

import "bootstrap/dist/css/bootstrap.min.css";

import {
  Button,
  Container,
  Row,
  Col,
  Form,
  Card,
  Jumbotron,
} from "react-bootstrap";

function SignupForm(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log({
      email: formState.email,
      password: formState.password,
      firstName: formState.firstName,
      lastName: formState.lastName,
    });
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.type);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Jumbotron
      style={{ backgroundColor: "transparent", minHeight: "100vh" }}
      fluid
    >
      <Container>
        <Row className="justify-content-md-center">
          <Col md lg="4">
            <Card>
              <Card.Body>
                <Form onSubmit={handleFormSubmit} action="submit">
                  <Form.Group controlId="formFirst">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="firstname"
                      name="firstName"
                      isRequired
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formLast">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="lastname"
                      name="lastName"
                      isRequired
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      isRequired
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      isRequired
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Button variant="dark" type="submit" block>
                    Signup
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default SignupForm;
