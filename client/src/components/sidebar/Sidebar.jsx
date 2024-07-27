import React from 'react'
import "./sidebar.css"
import {assets} from "../../assets/assets"
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-top">
        <div className="sidebar-top-head">
          <img src={assets.spotify_logo} alt="" />
          <h2>Samify</h2>
        </div>
        <div className="sidebar-top-options">
            <img src={assets.home_icon} alt="home" />
            <p>Home</p>
        </div>
        <div className="sidebar-top-options">
            <img src={assets.search_icon} alt="search" />
            <p>Search</p>
        </div>

      </div>

      <div className="sidebar-bottom">
        <div className="sidebar-bottom-head">
          <div className="bottom-head-left"> <img src={assets.stack_icon} alt="stack" />
          <h4>Library</h4></div>
          <div className="bottom-head-right"> <img src={assets.plus_icon} alt="stack" />
        <img src={assets.arrow_icon} alt="" /></div>
         
        </div>
        <div className="lib-box">
          <h1>Create your first Playlist</h1>
          <p>Its' easy we will help you</p>
          <button>create playlist</button>
        </div>
        <div className="lib-box">
          <h1>lets find some podcasts to follow</h1>
          <p>we will keep you updated with new episodes</p>
          <button>Browse Podcasts</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
