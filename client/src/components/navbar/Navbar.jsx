import React from 'react'
import "./navbar.css"
import { assets } from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-left">
        <img src={assets.arrow_left} alt="img" />
        <img src={assets.arrow_right} alt="img" />
      </div>

      <div className="nav-right">
        <button>
            Explore Premium
        </button>
        <p>S</p>
      </div>

      <div className="nav-bottom">
        <button>All</button>
        <button>Music</button>
        <button>Podcasts</button>
      </div>

    </div>
  )
}

export default Navbar
