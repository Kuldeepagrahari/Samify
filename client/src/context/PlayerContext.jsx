import React, { useEffect, useRef, useState } from 'react'
import { createContext, useContext } from 'react'
import { songsData } from '../assets/assets'

export const PlayerContext = createContext()

export const PlayerContextProvider = ({children}) => {

    const audioRef = useRef()
    const seekBg = useRef()
    const seekbar = useRef()
 
    const [track, setTrack] = useState(songsData[0])
    const [playing, SetPlaying] = useState(false)
    const [time, setTime] = useState({
      currentTime:{
        second:0,
        minute:0
      },
      totalTime:{
        second:0, 
        minute:0
      }
    })

    const play = () => {
      SetPlaying(true)
      audioRef.current.play()
    }

    const pause= () => {
      SetPlaying(false)
      audioRef.current.pause()
    }

    const playWithId = async(id) => {
       await  setTrack(songsData[id])
      
      await audioRef.current.play()
      SetPlaying(true)
      console.log("id:" + id)
    }

    const next = async() => {
      if(track.id < songsData.length - 1){
        await setTrack(songsData[track.id + 1])
        await SetPlaying(true)
        await audioRef.current.play()
      }
    }
    const previous = async() => {
      if(track.id > 0){
        await setTrack(songsData[track.id - 1])
        await SetPlaying(true)
        await audioRef.current.play()
      }
    }
    useEffect(()=>{
      setTimeout(()=>{
        audioRef.current.ontimeupdate = () => {
          seekbar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + '%'
          // console.log("sam" + seekbar.current.style.width)

          setTime({
            currentTime:{
              second:Math.floor(audioRef.current.currentTime % 60),
              minute:Math.floor(audioRef.current.currentTime / 60)
            },
            totalTime:{
              second:Math.floor(audioRef.current.duration % 60),
              minute:Math.floor(audioRef.current.duration / 60)
            }
         
          })
        }
      })
    },[audioRef])
    const Contextvalue = {
      audioRef,
      seekBg,
      seekbar, 
      play, pause,
      track, setTrack,
      playing, SetPlaying,
      time,
      playWithId,
      next, previous

    }
   
    return(
        <PlayerContext.Provider value={Contextvalue}>
          {children}
        </PlayerContext.Provider>
    )
}

export const usePlayer = () => {
    return useContext(PlayerContext)
}

