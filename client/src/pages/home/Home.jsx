import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { albumsData } from '../../assets/assets'
import AlbumCard from '../../components/album-card/AlbumCard'
import { songsData } from '../../assets/assets'
import "./home.css"
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="containers">
       <div className="home-body">
        <h1 style={{fontSize:"2vw"}}>Featured Charts</h1>
        <div className="album-container">
          {
            albumsData.map((item, index) => {
                return <AlbumCard id={index} key={index} image={item.image} name={item.name} desc={item.desc}/>
            })
          }
        </div>
       </div>

       <div className="home-body">
        <h1 style={{fontSize:"2vw"}}>Todays' Biggest Hits</h1>
        <div className="album-container">
          {
            songsData.map((item, index) => {
                return <AlbumCard id={index} key={index} image={item.image} name={item.name} desc={item.desc}/>
            })
          }
        </div>
       </div>
       </div>


    </div>
  )
}

export default Home
