import React from 'react'
import "./UserSidebar.css";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { Link } from "react-router-dom";

const UserSidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">User Dashboard</h3>
          <ul className="sidebarList">
              <li className="sidebarListItem" onClick={() => props.setPage("User")}>
                <PermIdentityIcon className="sidebarIcon" />
                User
              </li>
              <li className="sidebarListItem" onClick={() => props.setPage("OrderList")}>
                <AttachMoneyIcon className="sidebarIcon" />
                Orders
              </li>
            <li className="sidebarListItem">
              <MailOutlineIcon className="sidebarIcon" />
              Message
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UserSidebar