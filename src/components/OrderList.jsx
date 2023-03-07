import React from 'react'
import "./OrderList.css";
import { Col, FormControl, Row } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
export default function OrderList() {
  return (
    <div className="order-container">
      <div className="table-wrapper">
          <div className="table-title">
              <Row>
                  <Col sm="8"><h2>Customer Details</h2></Col>
                  <Col sm="4">
                      <div className="search-box">
                          <SearchIcon className="material-icons" />
                          <FormControl type="text" placeholder="Search order history" />
                      </div>
                  </Col>
              </Row>
          </div>
          <table className="table table-hover table-bordered">
              <thead>
                  <tr>
                      <th>Item ID</th>
                      <th>SKU</th>
                      <th>Item Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1</td>
                      <td>WEWANT</td>
                      <td>Wand</td>
                      <td>$10</td>
                      <td>2</td>
                      <td>$20</td>
                  </tr>
              </tbody>
          </table>
          <div className="clearfix">
              <div className="hint-text">Showing <b>1</b> out of <b>2</b> entries</div>
              <ul className="pagination">
                  <li className="page-item active"><a href="#" className="page-link">1</a></li>
                  <li className="page-item"><a href="#" className="page-link">2</a></li>
              </ul>
          </div>
        </div>
    </div>  
  );
}
