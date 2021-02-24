import React from 'react'
import Avatar from '../components/Avatar'
import Title from '../components/Title'
import '../assets/css/Repo.css'

export default function Repo({avatar, title, desc}) {
  return (
    <div className="github-repo d-flex">
      <Avatar avatar={avatar}/>
      <Title title={title} desc={desc}/>
    </div>
  )
}
