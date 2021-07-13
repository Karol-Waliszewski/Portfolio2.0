import React, { createContext, useState } from 'react'

type NavContextType = {
  active: boolean
  setActive?: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavContext = createContext<NavContextType>({
  active: false,
  setActive: undefined,
})

export const NavProvider: React.FC = ({ children }) => {
  const [active, setActive] = useState(false)

  return (
    <NavContext.Provider value={{ active, setActive }}>
      {children}
    </NavContext.Provider>
  )
}
