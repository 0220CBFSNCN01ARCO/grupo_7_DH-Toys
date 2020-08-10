import React from 'react';

export default function ActionButtons(props) {
  return (
    <li className="nav-item">
      <a className="nav-link collapsed" href="/">
        <i className={`fas fa-fw fa-${props.icon}`}></i>
        <span>{props.title}</span>
      </a>
    </li>
  )
}