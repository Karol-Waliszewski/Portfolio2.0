import { useContext } from 'react'

import { NavContext } from 'context/navContext'

const useNav = () => useContext(NavContext)

export default useNav
