import React from 'react'
import icon from '../assets/img/branch.svg'

export default function Branch({url, branch}) {
  return (
    <div className="flex-fill d-flex align-items-end justify-content-between flex-column">
      <p className="github-url">{url}</p>
      <div className="d-flex align-items-center wrap-branch">
        <img src={icon} alt="" width="12"/>
        <p className="github-branch ml-1">{branch}</p>
      </div>
    </div>
  )
}
