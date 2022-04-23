import { useContext, ContextType } from 'react'

import { ModeContext } from 'context/modeContext'

const useMode = (): NonNullable<ContextType<typeof ModeContext>> => {
  const context = useContext(ModeContext)

  if (!context) {
    throw new Error('useMode must be used inside ModeProvider.')
  }

  return context
}

export default useMode
