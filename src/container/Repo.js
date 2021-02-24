import React from 'react'
import Avatar from '../components/Avatar'
import Title from '../components/Title'
import Url from '../components/Url'
import Branch from '../components/Branch'
import Fork from '../components/Fork'
import '../assets/css/Repo.css'

export default function Repo({keyProps, avatar, title, desc, url, branch, fork}) {
  return (
    <div key={keyProps} className="github-repo d-flex mb-3">
      <Avatar avatar={avatar}/>
      <Title title={title} desc={desc}/>
      <div className="flex-fill d-flex align-items-end justify-content-between flex-column">
        <div className=" d-flex">
          <Fork fork={fork}/>
          <Branch branch={branch}/>
        </div>
        <Url url={url}/>
      </div>
    </div>
  )
}
