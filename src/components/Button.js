import React from 'react'
import '../assets/css/Button.css'
import Logo from '../assets/img/gh-light-32.png'

export default function Button({ trigger }) {
  return (
    <button className="github d-flex justify-content-center align-items-center" onClick={trigger}>
      <img src={Logo} alt="icon" width="32" />
      <h1 className="ml-2"> Login </h1>
    </button>
  )
}
