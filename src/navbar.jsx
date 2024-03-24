import { getByDisplayValue } from '@testing-library/react'
import React from 'react'

const Navbar = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-around", backgroundColor:"yellow"}}>
        <p style={{cursor:'pointer'}}>Home</p>
        <p style={{cursor:'pointer'}}>Facilities</p>
        <p style={{cursor:'pointer'}}>Rooms</p>
        <p style={{cursor:'pointer'}}>Contact-us</p>
    </div>
  )
}

export default Navbar