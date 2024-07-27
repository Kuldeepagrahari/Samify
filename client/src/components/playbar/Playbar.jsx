import React from 'react'
import "./playbar.css"
import { assets } from '../../assets/assets'
import { songsData } from '../../assets/assets'
const Playbar = () => {
  return (
    <div className='play'>

      <div className="song-name">
        <img src={songsData[0].image} alt="img" />
         <div className="song-name-right">
          <h1>{songsData[0].name}</h1>
          <h2>{songsData[0].desc.slice(0,15)}</h2>
         </div>
      </div>

      <div className="player">
        <div className="player-top">
          <img src={assets.shuffle_icon} alt="img" />
          <img src={assets.prev_icon} alt="img" />
          <img src={assets.play_icon} alt="img" />
          <img src={assets.next_icon} alt="img" />
          <img src={assets.mini_player_icon} alt="img" />
        </div>
        <div className="player-scroller">
            
           <hr />
        </div>
      </div>
      <div className="more-btns">
          <img src={assets.plays_icon} alt="img" />
          <img src={assets.mic_icon} alt="img" />
          <img src={assets.queue_icon} alt="img" />
          <img src={assets.speaker_icon} alt="img" />
          <img src={assets.volume_icon} alt="img" />
      </div>

    </div>
  )
}

export default Playbar
