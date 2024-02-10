import React, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom'

export default function Navbar() {
  // const[active,setActive] = useState('.active')
  // function clickHandler(params) {
  //   if () {
      
  //   } else {
      
  //   }
  // }
  return (
    <div>
        <ul>
            <li> <NavLink  to='/'>Home</NavLink> </li>
            <li> <NavLink to='/About'>About</NavLink> </li>
            <li> <NavLink to='/Labs'>Labs</NavLink> </li>
            <li> <NavLink to='/Support'>Support</NavLink> </li>
        </ul>
    </div>
  )
}
