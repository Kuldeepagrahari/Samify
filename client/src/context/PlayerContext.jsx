import React, { useRef } from 'react'
import { createContext, useContext } from 'react'

export const PlayerContext = createContext()

export const PlayerContextProvider = ({children}) => {

    const audioRef = useRef()
    const seekBg = useRef()
    const seekbar = useRef()
    const Contextvalue = {
      audioRef,
      seekBg,
      seekbar
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

