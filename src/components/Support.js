import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Support() {
  const navigate = useNavigate()
  function changeHandler() {
    navigate('/Labs')
  }
  function backHandler() {
    navigate(-1);
  }
  return (
    <div>
      <div>
        support
      </div>
      <button onClick={changeHandler}>move to labs page</button> <br />
      <button onClick={backHandler}> go back</button>
    </div>
  )
}
