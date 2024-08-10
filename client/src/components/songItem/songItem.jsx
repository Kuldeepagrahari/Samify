import React from 'react'
// import {useNavigate } from 'react-router-dom'
import "../album-card/album-card.css"
import { usePlayer } from '../../context/PlayerContext'
const SongItem = ({image, name, desc, id}) => {
    
    // const navigation = useNavigate()
    const {playWithId} = usePlayer()

  return (
    <div onClick={() => playWithId(id)} className='album-card'>
      <img src={image} alt="img" />
      <h2>{name}</h2>
      <p>{desc}</p>
      
    </div>
  )
}

export default SongItem
