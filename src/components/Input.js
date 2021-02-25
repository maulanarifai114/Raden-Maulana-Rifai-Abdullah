import React from 'react'
import '../assets/css/Input.css'
export default function Input({onchange, onenter, placeholder}) {
  return <input placeholder={placeholder} className="github-input" type="text" onChange={onchange} onKeyPress={onenter} />
}
