import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { handleProductUpdate } from "../utils/AdminOperations";
import { useProductsProvider } from "../utils/ProductProvider";
import { Message } from "semantic-ui-react";
const ModifyInventoryForm = (props) => {
  const [productID, setProductId] = useState();
  const [newPrice, setNewPrice] = useState();
  const [newQuantity, setNewQuantity] = useState();
  const { reloadData } = useProductsProvider();

  function showError() {
    let errormsg = document.querySelector(".login-error");
    errormsg.classList.remove("hidden");
  }
  function submitForm() {
    const form = document.querySelector(".update-inventory-form");
    let successmsg = document.querySelector(".login-success");
    let errormsg = document.querySelector(".login-error");
    errormsg.classList.add("hidden");
    successmsg.classList.remove("hidden");
    handleProductUpdate(productID, newPrice, newQuantity, reloadData);
    form.reset();
    setTimeout(() => {
      successmsg.classList.add("hidden");
    }, 2000);
  }

  function formValidation() {
    const form = document.querySelector(".update-inventory-form");
    const inputs = form.querySelectorAll("input");
    let errorStatus = 0;
    inputs.forEach((input) => {
      if (input.value === "") {
        errorStatus++;
      }
    });

    if (errorStatus > 0) {
      showError();
    } else {
      submitForm();
    }
  }

  return (
    <>
      <Row className="mb-4">
        <div className='form-container'>
          <Form className="update-inventory-form">
            <Form.Group className="mb-3">
              <Form.Label>ID</Form.Label>
              <Form.Control
                className="edit-input-field"
                type="text"
                onChange={(e) => setProductId(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                className="edit-input-field"
                type="text"
                onChange={(e) => setNewPrice(parseInt(e.target.value))}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                className="edit-input-field"
                type="text"
                onChange={(e) => setNewQuantity(parseInt(e.target.value))}
              />
            </Form.Group>
            <Message
              className="login-error error hidden"
              header="Invalid Information"
              content="Please Fill Out All Fields"
            />
            <Message
              success
              className="login-success hidden"
              header="Success"
              content="Success!"
            />
            <Button onClick={formValidation}>Submit Changes</Button>
          </Form>
        </div>
      </Row>
    </>
  );
};

export default ModifyInventoryForm;
