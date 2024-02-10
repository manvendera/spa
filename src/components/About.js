import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function About() {
  const navigate = useNavigate()
  function changeHandler() {
    navigate('/Support')
  }
  return (
    <div>
      <div>
        About page
      </div>
      <button onClick={changeHandler}>move to support page</button>
    </div>
  )
}
