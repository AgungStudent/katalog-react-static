import React from 'react'

export default function ListNavbar({ link, content }) {
  return (
    <li className="nav-item px-2">
      <a className="nav-link fw-medium active" aria-current="page" href={link}>
        {" "}
        {content}{" "}
      </a>
    </li>
  )
}