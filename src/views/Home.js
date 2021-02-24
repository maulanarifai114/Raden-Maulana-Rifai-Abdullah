import React, { useState } from 'react'
import axios from 'axios'
import Button from '../components/Button'
import Input from '../components/Input'
import Repo from '../container/Repo'

export default function Home() {
  const [repos, setRepos] = useState([])
  // const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo&redirect_uri=http://localhost:3000/detail`
  const login = (e) => {
    e.preventDefault()
    console.log('login')
  }
  const search = (e) => {
    if (e.target.value === '') {
      setRepos([])
    } else {
      axios
        .get(`${process.env.REACT_APP_API_URL}/users/${e.target.value}/repos`)
        .then((res) => setRepos(res.data))
        .catch((err) => console.log(err.response.data.message))
    }
  }
  return (
    <div className="container my-5 d-flex flex-column">
      <Button trigger={login} />
      <br />
      <Input onchange={search} />
      <br />
      {/* <p>No Reposs</p> */}
      {repos.map((item, index) => 
        <Repo
          branch={item.default_branch}
          avatar={item.owner.avatar_url}
          title={item.name}
          desc={item.description}
          fork={item.forks}
          url={item.html_url}
          keyProps={index}
        />
      )}
    </div>
  )
}
