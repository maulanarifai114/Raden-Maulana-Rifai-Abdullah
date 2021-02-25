import React, { useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { getToken } from '../actions/getToken'
import Input from '../components/Input'
import Repo from '../container/Repo'
import '../assets/css/Private.css'

export default function Private() {
  const history = useHistory()
  const location = useLocation()
  useEffect(() => {
    const code = location.search.split('=')
    getToken(location, history, code)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history])
  return (
    <div className=" container-fluid my-5 d-flex flex-column">
      <div className="row">
        <div className="col d-flex flex-column mr-border">
          {/* <Input onchange={inputed} onenter={search} placeholder="Search Repositories" /> */}
          <Input placeholder="Search Repositories" />
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
        <div className="col d-flex flex-column ml-border">
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
    </div>
  )
}
