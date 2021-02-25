import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { getToken } from '../actions/getToken'
import { login, inputed, getRepo, search } from '../actions/getRepos'
import Input from '../components/Input'
import Repo from '../container/Repo'
import '../assets/css/Private.css'

export default function Private() {
  const history = useHistory()
  const location = useLocation()
  
  // const [repos, setRepos] = useState([])
  // const [searching, setSearch] = useState('')
  // const [total, setTotal] = useState(0)
  // const [page, setPage] = useState(0)

  const [myRepos, setMyRepos] = useState([])
  const [mySearching, setMySearch] = useState('')
  const [myTotal, setMyTotal] = useState(0)
  const [myPage, setMyPage] = useState(0)

  useEffect(() => {
    const code = location.search.split('=')
    getToken(location, history, code)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history])
  return (
    <div className=" container my-5 d-flex flex-column">
      <div className="d-flex flex-column">
        {/* <Input onchange={inputed} onenter={search} placeholder="Search Repositories" /> */}
        <Input placeholder="Your Repositories" />
        <br />
        <Repo
          branch={'main'}
          // branch={item.default_branch}
          avatar={'https://avatars.githubusercontent.com/u/72542280?s=460&u=09207f92a439d660f07bb376109fb02b82de500c&v=4'}
          // avatar={item.owner.avatar_url}
          title={'OctoCat'}
          // title={item.name}
          desc={'Dummy Data OctoCat'}
          // desc={item.description}
          fork={0}
          // fork={item.forks}
          url={'https:/github.com/octocat/dummy'}
          // url={item.html_url}
          // key={item.id}
        />
      </div>
    </div>
  )
}
