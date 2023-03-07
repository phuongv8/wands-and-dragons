import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { handleAddNewItem } from "../utils/AdminOperations";
import { Segment, Dimmer, Loader, Message } from "semantic-ui-react";
import { useProductsProvider } from "../utils/ProductProvider";
const AddInventoryForm = (props) => {
  const [sku, setSKU] = useState();
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [manufacturer, setManufacturer] = useState();
  const [imageurl, setImageurl] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [quantity, setQuantity] = useState();

  const { inventory, reloadData } = useProductsProvider();

  function addProduct() {
    const newData = {
      sku: sku,
      name: name,
      category: category,
      manufacturer: manufacturer,
      imageUrl: imageurl,
      description: description,
      quantity: Number(quantity),
      price: Number(price),
    };
    handleAddNewItem(newData);
    setTimeout(reloadData(), 1000)
  }

  function showError() {
    let errormsg = document.querySelector(".login-error");
    errormsg.classList.remove("hidden");
  }
  function submitForm() {
    let successmsg = document.querySelector(".login-success");
    let errormsg = document.querySelector(".login-error");
    const form = document.querySelector(".add-product-form");
    errormsg.classList.add("hidden");
    successmsg.classList.remove("hidden");
    addProduct();
    form.reset();
    setTimeout(() => {
      reloadData();
      successmsg.classList.add("hidden");
    }, 2000);
  }

  function formValidation() {
    const form = document.querySelector(".add-product-form");
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
          <Form className="add-product-form">
            <Form.Group className="mb-3">
              <Form.Label>SKU</Form.Label>
              <Form.Control
                className="edit-input-field"
                type="text"
                onChange={(e) => setSKU(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                className="edit-input-field"
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                className="edit-input-field"
                type="text"
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Manufacturer</Form.Label>
              <Form.Control
                className="edit-input-field"
                type="text"
                onChange={(e) => setManufacturer(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                className="edit-input-field"
                type="text"
                onChange={(e) => setImageurl(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                className="edit-input-field"
                type="text"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                className="edit-input-field"
                type="text"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                className="edit-input-field"
                type="text"
                onChange={(e) => setQuantity(e.target.value)}
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
            <Button onClick={formValidation}>Add product</Button>
          </Form>
        </div>
      </Row>
    </>
  );
};

export default AddInventoryForm;
