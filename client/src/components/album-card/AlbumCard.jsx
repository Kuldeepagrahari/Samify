import React from 'react'
import {useNavigate } from 'react-router-dom'
import "./album-card.css"
const AlbumCard = ({image, name, desc, id}) => {
    
    const navigation = useNavigate()

  return (
    <div onClick={()=> navigation(`/album/${id}`) } className='album-card'>
      <img src={image} alt="img" />
      <h2>{name}</h2>
      <p>{desc}</p>
      
    </div>
  )
}

export default AlbumCard
