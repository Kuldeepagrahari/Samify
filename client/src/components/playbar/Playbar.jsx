import React from 'react'
import "./playbar.css"
import { assets } from '../../assets/assets'
import { songsData } from '../../assets/assets'
import { usePlayer } from '../../context/PlayerContext'
const Playbar = () => {

  const { seekBg,seekingBg, seekbar, play, pause, playing, track, time, next, previous } = usePlayer()


  return (
    <div className='play'>

      <div className="song-name">
        <img src={track.image} alt="img" />
        <div className="song-name-right">
          <h1>{track.name}</h1>
          <h2>{track.desc.slice(0, 15)}</h2>
        </div>
      </div>

      <div className="player">
        <div className="player-top">
          <img src={assets.shuffle_icon} alt="img" />
          <img onClick = {()=>previous()} src={assets.prev_icon} alt="img" />
          {
            !playing ? <img onClick={play} src={assets.play_icon} alt="img" /> : <img onClick={pause} src={assets.pause_icon} alt="img" />
          }


          <img onClick = {()=>next()} src={assets.next_icon} alt="img" />
          <img src={assets.mini_player_icon} alt="img" />
        </div>
        <div ref={seekBg} onClick={seekingBg} className="player-scroller">

          <p style={{ color: "white", position:"absolute",left:"-4vw" }}>{time.currentTime.minute} : {time.currentTime.second} </p> <hr ref={seekbar} /><p style={{position:"absolute",right:"-4vw"}}>{time.totalTime.minute} : {time.totalTime.second}</p>
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
