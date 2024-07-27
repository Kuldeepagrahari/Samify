import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../../assets/assets'
import "./displayAlbum.css"
const DisplayAlbum = () => {
    const {id} = useParams()
    const albumData = albumsData[id]
  return (

    
    <div style={{backgroundColor:`${albumData.bgColor}`}}>
        <Navbar/>
        <div className="top-cont" >
           <img src={albumData.image} alt="img" />
           <div className="top-cont-info">
            <h1>{albumData.name}</h1>
            <p>{albumData.desc}</p>
            <p><div className="display-album-logo"><img src={assets.spotify_logo} alt="img" />Samify</div>50 Songs  1,234,567 likes</p>
           </div>
        </div>

        <div className="list-cont">
            <table>
                <thead>
                    <tr>
                    <td>#</td>
                    <td>title</td>
                    <td>Album</td>
                    <td>Date Added</td>
                    <td><img src={assets.clock_icon} alt="img" /></td></tr>
                </thead>
                <hr ></hr>
                <tbody>
                    {
                        songsData.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td><img src={item.image} alt="" />{item.name}</td>
                                    <td>{albumData.name}</td>
                                    <td><p>5 days ago</p></td>
                                    <td>{item.duration}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

      
    </div>
  )
}

export default DisplayAlbum
