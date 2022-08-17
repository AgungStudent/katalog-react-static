import React from 'react'
import { Link } from 'react-router-dom'

export default function ListNavbar({ link, content }) {
  return (
    <li className="nav-item px-2">
      <Link to={link} className="nav-link fw-medium active">{content}</Link>
    </li>
  )
}