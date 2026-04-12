import React from 'react'
import {useNavigate } from 'react-router-dom'
import "./singer-card.css"
const SingerCard = ({image, name, id}) => {
    
    const navigation = useNavigate()

  return (
    <div onClick={()=> navigation(`/singer/${id}`) } className='singer-card'>
      <img src={image} alt="img" />
      <h2>{name}</h2>
      {/* <p>{desc}</p> */}
      
    </div>
  )
}

export default SingerCard
