import React from "react";
import Modal from "../registerModal/registerModal";
// import Buttons from "../Button";
import {
  Form,
  Button,
  ButtonToolbar,
  ButtonGroup,
  Col
  // Modal
} from "react-bootstrap";
import "./register.css";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

export default class Login extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isShowing: false
    };
  }

  showModal = () => {
    this.setState({
      isShowing: true
    });

    console.log("Hello");
  };

  hideModal = () => {
    this.setState({
      isShowing: false
    });

    console.log("Bye");
  };

  render() {
    return (
      <div>
        <ButtonToolbar>
          <ButtonGroup className="mr-2" aria-label="First group">
            <Button
              variant="info"
              className="loginBut"
              onClick={e => this.showModal()}
            >
              Register
            </Button>
          </ButtonGroup>
        </ButtonToolbar>

        {/* <Button onClickHandler={e => this.showModal()} buttonText={"Login"} /> */}
        <Modal isShowing={this.state.isShowing}>
          <div>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="registerModal">Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label className="registerModal">Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Label className="registerModal">Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label className="registerModal">Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label className="registerModal">City</Form.Label>
                  <Form.Control as="select">
                    <option>City</option>
                    <option>Bronx</option>
                    <option>Brooklyn</option>
                    <option>Manhattan</option>
                    <option>Queens</option>
                    <option>Staten Island</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label className="registerModal">State</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label className="registerModal">Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Form.Row>

              <Form.Group id="landlordCheckbox">
                <Form.Check type="checkbox" label="Landlord" />
              </Form.Group>
              <Form.Group id="tenantCheckbox">
                <Form.Check type="checkbox" label="Tenant" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <br />
          <ButtonToolbar>
            <ButtonGroup className="mr-2" aria-label="First group">
              <Button
                variant="info"
                className="registerBut"
                onClick={e => this.hideModal()}
                size="sm"
              >
                X
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
          {/* <Buttons onClickHandler={e => this.hideModal()} buttonText={"X"} /> */}
          <br />
        </Modal>
      </div>
    );
  }
}
