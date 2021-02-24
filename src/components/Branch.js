import React from 'react'
import icon from '../assets/img/branch.svg'

export default function Branch({branch}) {
  return (
    <div className="d-flex align-items-center wrap-branch ml-3">
      <img src={icon} alt="" width="12"/>
      <p className="ml-1">{branch}</p>
    </div>
  )
}
