import { useContext } from 'react'

import { ModeContext } from 'context/modeContext'

const useMode = () => useContext(ModeContext)

export default useMode
