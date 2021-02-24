import React from 'react'
import '../assets/css/Repo.css'

export default function Avatar({avatar}) {
  return (
    <div>
      <figure className="figure">
        <img src={`${avatar}`} alt="" />
      </figure>
    </div>
  )
}
