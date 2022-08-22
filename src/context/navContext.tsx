import React, { createContext, PropsWithChildren, useState } from 'react'

export const NavContext = createContext<ReturnType<
  typeof useProviderSettings
> | null>(null)

const useProviderSettings = () => {
  const [active, setActive] = useState(false)

  return { active, setActive }
}

export const NavProvider: React.FC<
  PropsWithChildren<Record<string, never>>
> = ({ children }) => {
  const { active, setActive } = useProviderSettings()

  return (
    <NavContext.Provider value={{ active, setActive }}>
      {children}
    </NavContext.Provider>
  )
}
