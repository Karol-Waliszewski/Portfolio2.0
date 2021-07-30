import { useContext } from 'react'

import { NavContext } from 'context/navContext'

const useNav = () => {
  const context = useContext(NavContext)

  if (!context) {
    throw new Error('useMode must be used inside ModeProvider.')
  }

  return context
}

export default useNav
