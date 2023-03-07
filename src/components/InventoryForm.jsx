import React from "react";
import { Button, Table } from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useProductsProvider } from "../utils/ProductProvider";
import { handleRemoveProduct } from "../utils/AdminOperations";

const InventoryForm = () => {
  const { inventory, reloadData } = useProductsProvider();

  function deleteItem(id) {
    handleRemoveProduct(id);
    setTimeout(reloadData(), 2000)
  }

  return (
    <Table striped bordered hover className="table-md">
      <thead>
        <tr className="table-row">
          <th>ID</th>
          <th>SKU</th>
          <th className='table-product-name'>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {inventory.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.sku}</td>
            <td className='table-name-data'>{product.name}</td>
            <td>$ {product.price}</td>
            <td>{product.quantity}</td>
            <td>
              <button
                className="btn-sm"
                onClick={() => deleteItem(product.id)}
              >
                <DeleteIcon />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default InventoryForm;
