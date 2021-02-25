import React, { useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { getToken } from '../actions/getToken'

export default function Private() {
  const history = useHistory()
  const location = useLocation()
  useEffect(() => {
    const code = location.search.split('=')
    getToken(location, history, code)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history])
  return (
    <div>
      Private
    </div>
  )
}
