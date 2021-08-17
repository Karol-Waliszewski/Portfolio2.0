import React, { createContext, useState, useEffect } from 'react'

import isBrowser from 'utils/isBrowser'

type Mode = 'light' | 'dark'

export const ModeContext = createContext<ReturnType<
  typeof useProviderSettings
> | null>(null)

const useProviderSettings = () => {
  const [mode, setMode] = useState<Mode>('light')

  const changeMode = (newMode: Mode) => {
    if (isBrowser) {
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

  return { mode, changeMode, toggleMode }
}

export const ModeProvider: React.FC = ({ children }) => {
  const { mode, changeMode, toggleMode } = useProviderSettings()

  return (
    <ModeContext.Provider value={{ mode, changeMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  )
}
