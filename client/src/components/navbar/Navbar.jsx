import React from 'react'
import "./navbar.css"
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className='nav'>
      <div className="nav-left">
        <img onClick={() => navigate(-1) }src={assets.arrow_left} alt="img" />
        <img onClick={() => navigate(+1)} src={assets.arrow_right} alt="img" />
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
