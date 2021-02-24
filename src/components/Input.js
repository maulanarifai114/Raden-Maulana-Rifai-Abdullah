import React from 'react'
import '../assets/css/Input.css'
export default function Input({onchange}) {
  return <input placeholder="Search Repo by Username" className="github-input" type="text" onChange={onchange} />
}
