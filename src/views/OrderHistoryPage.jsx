import React, { useState } from 'react'
import UserSidebar from "../components/UserSidebar.jsx"
import OrderList from "../components/OrderList.jsx";
import UserProfile from "../components/UserProfile.jsx";
import "./OrderHistoryPage.css";

const OrderHistoryPage = () => {
  const [page, setPage] = useState("OrderList");
  return (
    <div className='order-page-container'>
      <UserSidebar setPage={setPage}/>
      {page === "OrderList" && <OrderList />}
      {page === "User" && <UserProfile />}
      
    </div>
  )
}

export default OrderHistoryPage