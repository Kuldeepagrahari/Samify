import { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar.jsx'
import Playbar from './components/playbar/Playbar.jsx'


import Display from './Display.jsx'

function App() {
  

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
     </div>
    </div>
  )
}

export default App
