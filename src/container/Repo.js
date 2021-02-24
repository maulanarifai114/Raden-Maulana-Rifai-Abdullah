import React from 'react'
import Avatar from '../components/Avatar'

export default function Repo({avatar}) {
  return (
    <div className="github-repo d-flex">
      <Avatar avatar={avatar}/>
    </div>
  )
}
