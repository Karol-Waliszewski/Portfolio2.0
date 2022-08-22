import React, {
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
} from 'react'
import styled, { keyframes } from 'styled-components'

import isBrowser from 'utils/isBrowser'

import type { ActiveRequired } from 'types/active'

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
    } else {
      const mql = window.matchMedia('(prefers-color-scheme: dark)')
      if (typeof mql.matches === 'boolean' && mql.matches) {
        changeMode('dark')
      }
    }
  }, [])

  return { mode, changeMode, toggleMode }
}

const fadeIn = keyframes`
  0% {
    opacity: 0.01;
  }
  1% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const ModeWrapper = styled.div<ActiveRequired>`
  opacity: 1;

  animation-name: ${fadeIn};
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 175ms;
`

export const ModeProvider: React.FC<
  PropsWithChildren<Record<string, never>>
> = ({ children }) => {
  const [mounted, setMounted] = useState(false)
  const { mode, changeMode, toggleMode } = useProviderSettings()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <ModeWrapper active={mounted}>
      <ModeContext.Provider value={{ mode, changeMode, toggleMode }}>
        {children}
      </ModeContext.Provider>
    </ModeWrapper>
  )
}
