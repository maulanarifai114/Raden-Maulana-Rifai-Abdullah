import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Private() {
  const location = useLocation()
  useEffect(() => {
    console.log(location.pathname)
  }, [location])
  return (
    <div>
      Private
    </div>
  )
}
