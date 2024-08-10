import { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar.jsx'
import Playbar from './components/playbar/Playbar.jsx'


import Display from './Display.jsx'
import { usePlayer } from './context/PlayerContext.jsx'

function App() {
  const {audioRef, track} = usePlayer()

  return (
    <div className='app'>
     <div className="side-bar">
      <Sidebar/>
     </div>
     <div className="body">
       <Display/>

     </div>
     <div className="player-box">
      <Playbar/>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
     </div>
    </div>
  )
}

export default App
