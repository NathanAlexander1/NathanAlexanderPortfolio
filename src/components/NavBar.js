import React from 'react'

function NavBar() {
  return (
    <ul className="navList">
        <a className='font-mono font-bold hover:text-yellow-400  hover:tracking-wide' href="/aboutMe">About Me</a>
        <a className='font-mono font-bold hover:text-yellow-400  hover:tracking-wide' href="/portfolio">Portfolio</a>
        <a className='font-mono font-bold hover:text-yellow-400  hover:tracking-wide' href="/resume">Resume</a>
        <a className='font-mono font-bold hover:text-yellow-400  hover:tracking-wide' href="/contactMe">Contact Me</a>
    </ul>
  )
}

export default NavBar