import React from 'react'
import Avatar from '../components/Avatar'
import Title from '../components/Title'
import Branch from '../components/Branch'
import '../assets/css/Repo.css'
// import icon from '../assets/img/branch.svg'

export default function Repo({avatar, title, desc, url, branch}) {
  return (
    <div className="github-repo d-flex">
      <Avatar avatar={avatar}/>
      <Title title={title} desc={desc}/>
      <Branch url={url} branch={branch}/>
    </div>
  )
}
