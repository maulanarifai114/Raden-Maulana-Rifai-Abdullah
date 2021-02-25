import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { getToken } from '../actions/getToken'
import { getMyRepo, searchMyRepo } from '../actions/getRepos'
import Input from '../components/Input'
import Repo from '../container/Repo'
import '../assets/css/Private.css'

export default function Private() {
  const history = useHistory()
  const location = useLocation()

  const [repos, setRepos] = useState([])
  const [fullRepos, setFullRepos] = useState([])
  const [page, setPage] = useState(0)
  const actionGetRepo = () => getMyRepo(page, setRepos, setPage, setFullRepos)
  const actionSearch = (e) => searchMyRepo(e, page, setPage, setRepos, fullRepos, actionGetRepo)

  window.onscroll = () => {
    let innerHeight = window.innerHeight
    let scrollTop = document.documentElement.scrollTop
    let offsetHeight = document.documentElement.offsetHeight
    console.log(innerHeight + scrollTop)
    console.log(offsetHeight)
    if (innerHeight + scrollTop ===  offsetHeight) { actionGetRepo() }
  }

  useEffect(() => {
    const code = location.search.split('=')
    getToken(location, history, code)
    if (localStorage.getItem('access_token')) {
      actionGetRepo()
    } else {
      history.push('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history])

  return (
    <div className=" container my-5 d-flex flex-column">
      <div className="d-flex flex-column">
        <Input
          onchange={actionSearch}
          placeholder="Your Repositories"
        />
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
    </div>
  )
}
