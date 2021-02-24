import React from 'react'
import icon from '../assets/img/repo.svg'

export default function Title({title, desc}) {
  return (
    <div className="ml-20 d-flex flex-column justify-content-center">
      <div className="d-flex align-items-center">
        <img src={icon} alt="" className="mr-2" width="16" />
        <h1 className="title-repo">{title}</h1>
      </div>
      <br />
      <h4 className="desc">{desc}</h4>
    </div>
  )
}
