import React, { useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import axios from 'axios'

export default function Private() {
  const history = useHistory()
  const location = useLocation()
  useEffect(() => {
    const code = location.search.split('=')
    if (!localStorage.getItem('access_token')) {
      axios
        .post(
          `https://github.com/login/oauth/access_token?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&code=${code[1]}`
        )
        .then((res) => {
          const data = res.data.split('&')
          const token = data[0].split('=')
          localStorage.setItem(token[0], token[1])
          const queryParams = new URLSearchParams(location.search)
          queryParams.delete(location.search)
          history.replace({ search: '' })
        })
        .catch((err) => console.log(err.response))
    } else {
      const queryParams = new URLSearchParams(location.search)
      queryParams.delete(location.search)
      history.replace({ search: '' })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history])
  return (
    <div>
      Private
    </div>
  )
}
