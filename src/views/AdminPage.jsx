import React, { useState } from "react";
import { Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import InventoryForm from "../components/InventoryForm"
import AddInventoryForm from "../components/AddInventoryForm"
import ModifyInventoryForm from "../components/ModifyInventoryForm"
import "./AdminPage.css";
import { useAuth } from "../components/Auth";
import { useProductsProvider } from "../utils/ProductProvider";

const AdminPage = () => {
  const [page, setPage] = useState("InventoryForm");
  const auth = useAuth()
  const {inventory, categories, setInventory, isLoading } = useProductsProvider();
  const navigate = useNavigate()


  const handleLogout =() => {
    auth.logout()
    navigate('/')
  }

  return (
    <>
      <Row className='inventory-row'>
        <Col>
          <h4>Inventory</h4>
        </Col>
        <Col md={7} className='button-group'>
          <Button className='my-3 ms-4 button-admin'
            onClick={() => setPage("InventoryForm")}>
            Product List
          </Button>
          <Button className='my-3 ms-4 button-admin'
          onClick={() => setPage("AddProduct")}>
            Add Product
          </Button>
          <Button className='my-3 ms-4 button-admin'
          onClick={() => setPage("ModifyProduct")}>
            Modify Product
          </Button>
          <Button className='my-3 ms-4 button-admin'
          onClick={handleLogout}>
            Logout
          </Button>
        </Col>
      </Row>
      <div className='admin-table-container'>
        {page === "InventoryForm" && <InventoryForm/>}
        {page === "AddProduct" && <AddInventoryForm inventory={inventory} />}
        {page === "ModifyProduct" && <ModifyInventoryForm inventory={inventory} setInventory={setInventory}/>}
      </div>
      
    </>
  )
}

export default AdminPage