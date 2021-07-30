import React, { createContext, useState, useEffect } from 'react'

type Mode = 'light' | 'dark'

type ModeContextType = {
  mode: Mode
  changeMode?: (mode: Mode) => void
  toggleMode?: () => void
}

export const ModeContext = createContext<ModeContextType>({
  mode: 'light',
  changeMode: undefined,
  toggleMode: undefined,
})

export const ModeProvider: React.FC = ({ children }) => {
  const [mode, setMode] = useState<Mode>('light')

  const changeMode = (newMode: Mode) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('mode', newMode)
    }
    setMode(newMode)
  }

  const toggleMode = () => {
    if (mode === 'light') changeMode('dark')
    else if (mode === 'dark') changeMode('light')
  }

  useEffect(() => {
    const localMode = window.localStorage.getItem('mode')
    if (localMode === 'light' || localMode === 'dark') {
      changeMode(localMode)
    }
  }, [])

  return (
    <ModeContext.Provider value={{ mode, changeMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  )
}
