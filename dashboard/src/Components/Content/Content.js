import React, { Component } from 'react';
import BoxDashboard from './SubComponents/BoxDashboard';
import BigBoxWithImage from './SubComponents/BigBoxWithImage';
import BigBoxWithBoxes from './SubComponents/BigBoxWithBoxes';
import User from './SubComponents/User';

class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productsCount: "",
      usersCount: ""
    };
  }

  apiCall(url, consecuencia) {
    fetch(url)
      .then(res => res.json())
      .then(data => consecuencia(data))
      .catch(error => console.error(error))
  }

  componentDidMount() {
    this.apiCall("http://localhost:3030/api/products", this.showProducts);
    this.apiCall("http://localhost:3030/api/users", this.showUsers);
  }

  showProducts = (data) => {
    console.log(data);
    console.log(data.meta.products[data.meta.products.length - 1].description);
    this.setState({
      productsCount: data.meta.count,
      categoryByGroup: data.meta.categoryByGroup.length,
      lastProductCreated: data.meta.products[data.meta.products.length - 1].description
    })
  }

  showUsers = (data) => {
    console.log(data);
    this.setState({
      usersCount: data.meta.count
    })
  }

  render() {

    let contenido;

    let validation = (information) => {

      if (information === "") {
        contenido = "Cargando..."
      } else {
        contenido = information
      }
      return contenido
    }



    return (
      <div id="content">
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
            <User name="Walter White" image="/assets/images/dummy-avatar.jpg" />
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
            <BoxDashboard title="Total de productos" data={validation(this.state.productsCount)} color="primary" icon="clipboard-list" />

            {/* $$$ of all products in DB */}
            <BoxDashboard title="Total de usuarios" data={validation(this.state.usersCount)} color="success" icon="user-check" />

            {/* Amount of users in DB */}
            <BoxDashboard title="Total de categorias" data={validation(this.state.categoryByGroup)} color="warning" icon="clipboard-list" />

            <BoxDashboard title="Total de Productos Vendidos" data="38" color="primary" icon="dollar-sign" />

            <BoxDashboard title="Total de ventas" data="38" color="success" icon="dollar-sign" />

            <BoxDashboard title="Total de Ordenes generadas" data="38" color="warning" icon="clipboard-list" />

          </div>
          {/* Content Row */}
          <div className="row">
            {/* Last Product in DB */}
            <BigBoxWithImage title="Último producto creado" color="primary" image="assets/images/product_dummy.svg" data="Lorem ipsum dolor sit amet" name="image dummy" />

            {/* Categories in DB */}
            <BigBoxWithBoxes title="Total de productos por categoria" />
          </div>
        </div>
        {/* /.container-fluid */}
      </div>
    )
  }
}

export default Content;