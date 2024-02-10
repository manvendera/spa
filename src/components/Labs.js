import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Labs() {
  const navigate = useNavigate();
  function changeHandler() {
    navigate('/about')
  }
  return (
    <div>
 <div>this is lab page</div>
 <button className='border-2 border-black' onClick={changeHandler}>move to about page</button>

    </div>
   
  )
}
