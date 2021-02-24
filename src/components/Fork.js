import React from 'react'
import icon from '../assets/img/fork.svg'

export default function Fork({ fork }) {
  return (
    <div className="wrap-branch d-flex align-items-center">
      <img src={icon} alt="" width="15" />
      <p className="ml-1">fork</p>
      <p className="ml-1 github-fork d-block">{fork}</p>
    </div>
  )
}
