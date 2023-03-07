import React from "react";
import { render, screen } from "@testing-library/react";
import AddInventoryForm from "../components/AddInventoryForm.jsx";

const categories = [
  "SKU",
  "Manufacturer",
  "Name",
  "Category",
  "Image URL",
  "Price",
  "Description",
  "Quantity",
  "Add product",
];

test.each(categories)(
  "check if all the inventory categories are on the page",

  (category) => {
    render(<AddInventoryForm />);
    screen.getByText(category);
  }
);
