import React, { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Repo from '../container/Repo'
import { login, inputed, getRepo, search } from '../actions/getRepos'

export default function Home() {
  const [repos, setRepos] = useState([])
  const [searching, setSearch] = useState('')
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(0)
  const url = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&scope=repo&redirect_uri=${process.env.REACT_APP_BASE_URL}/private`
  
  const actionLogin = (e) => login(e, url)
  const actionInput = (e) => inputed(e, setSearch)
  const actionSearch = (e) => search(e, searching, page, setTotal, setRepos, setPage)
  const actionGetRepo = () => getRepo(page, searching, setTotal, setRepos, setPage)

  window.onscroll = () => {
    let innerHeight = window.innerHeight
    let scrollTop = document.documentElement.scrollTop
    let offsetHeight = document.documentElement.offsetHeight
    if (innerHeight + scrollTop ===  offsetHeight) { actionGetRepo() }
  }

  return (
    <div className="container my-5 d-flex flex-column">
      <Button trigger={actionLogin} label={localStorage.getItem('access_token') ? 'You Have Login' : 'Login'} />
      <br />
      <Input
        onchange={actionInput}
        onenter={actionSearch}
        placeholder="Search Repositories"
      />
      <br />
      {repos.length !== 0 && <h4>Total Search {total}</h4>}
      <br />
      {repos.map((item) => (
        <Repo
          branch={item.default_branch}
          avatar={item.owner.avatar_url}
          title={item.name}
          desc={item.description}
          fork={item.forks}
          url={item.html_url}
          key={item.id}
        />
      ))}
    </div>
  )
}
