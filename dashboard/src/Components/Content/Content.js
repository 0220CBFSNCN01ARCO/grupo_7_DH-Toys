import React, { Component } from 'react';
import BoxDashboard from './SubComponents/BoxDashboard'
import BigBoxWithImage from './SubComponents/BigBoxWithImage'
import BigBoxWithBoxes from './SubComponents/BigBoxWithBoxes'
import User from './SubComponents/User'
class Content extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      products: [] };
  }

  callAPIProducts() {
    fetch("http://localhost:3030/api/products")
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }

  callAPIUsers() {
    fetch("http://localhost:3030/api/users")
      .then(res => res.text())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }

  componentDidMount() {
    this.callAPIProducts()
    this.callAPIUsers()
  }

  render() {
    return (
      <div id="content dhcolor-white">
        {/* Topbar */}
        <nav className="navbar navbar-expand navbar-light bg-white dhcolor-yellow topbar mb-4 static-top shadow">
          {/* Sidebar Toggle (Topbar) */}
          <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars" />
          </button>
          {/* Topbar Navbar */}
          <ul className="navbar-nav ml-auto">
            {/* Nav Item - Alerts */}
            <li className="nav-item dropdown no-arrow mx-1">
              <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                <i className="fas fa-bell fa-fw" />
                {/* Counter - Alerts */}
                <span className="badge badge-danger badge-counter">3+</span>
              </a>
            </li>
            {/* Nav Item - Messages */}
            <li className="nav-item dropdown no-arrow mx-1">
              <a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
                <i className="fas fa-envelope fa-fw" />
                {/* Counter - Messages */}
                <span className="badge badge-danger badge-counter">7</span>
              </a>
            </li>
            <div className="topbar-divider d-none d-sm-block" />
            {/* Nav Item - User Information */}
            <User name="Walter White" image="/assets/images/dummy-avatar.jpg"/>
          </ul>
        </nav>
        {/* End of Topbar */}
        {/* Begin Page Content */}
        <div className="container-fluid">

          {/* Page Heading */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">DH Toys Dashboard</h1>
          </div>
          {/* Content Row */}
          <div className="row">

            {/* Amount of Products in DB */}
            <BoxDashboard title="Products in Data Base" data="135" color="primary" icon="clipboard-list"/>
            
            {/* $$$ of all products in DB */}
            <BoxDashboard title="Amount in product" data="$546.456" color="success" icon="dollar-sign"/>
            
            {/* Amount of users in DB */}
            <BoxDashboard title="Users quantity" data="38" color="warning" icon="user-check"/>
            
          </div>
          {/* Content Row */}
          <div className="row">
            {/* Last Product in DB */}
            <BigBoxWithImage title="Last product in Data Dase" color="primary" image="assets/images/product_dummy.svg" data="Lorem ipsum dolor sit amet" name="image dummy"/>
            
            {/* Categories in DB */}
            <BigBoxWithBoxes title="Categories in DB"/>
          </div>
        </div>
        {/* /.container-fluid */}
      </div>
    )
  }
}

export default Content;