import React from 'react';

export default function User(props) {
  return (
    <React.Fragment>
      <li className="nav-item dropdown no-arrow">
        <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
          <span className="mr-2 d-none d-lg-inline text-gray-600 small">{props.name}</span>
          <img className="img-profile rounded-circle" src={props.image} width={60} alt="profile-img" />
        </a>
      </li>
    </React.Fragment>
  )

}