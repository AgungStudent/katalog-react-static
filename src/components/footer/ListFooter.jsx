import React from 'react'

export default function ListFooter({ content, icon }) {
  return (
    <li className="mb-3">
      <a className="text-light text-decoration-none" href="#!">
        {icon ? <i className={`fas ${icon} me-3`}></i> : null}
        {content}
      </a>
    </li>
  )
}