import { useState, useEffect } from 'react'
import { Breakpoints as BreakpointsType } from 'types/theme'

import { breakpoints as themeBreakpoints } from 'styles/theme'

type BreakpointsBoolean = {
  [key in keyof BreakpointsType]: boolean
}

const useBreakpoint = (): BreakpointsBoolean => {
  const getBreakpoints = () => {
    const isSSR = typeof window === `undefined`
    const bps: Partial<BreakpointsBoolean> = {}

    const keys = Object.keys(themeBreakpoints) as Array<keyof BreakpointsType>
    keys.forEach((key) => {
      const query = `(min-width: ${themeBreakpoints[key]}px)`
      const matches = isSSR || window.matchMedia(query).matches
      bps[key] = matches
    })

    return bps as BreakpointsBoolean
  }

  const [breakpoints, setBreakpoints] = useState<BreakpointsBoolean>(
    getBreakpoints()
  )

  useEffect(() => {
    const listener = () => setBreakpoints(getBreakpoints())

    window.addEventListener('resize', listener)
    window.addEventListener('DOMContentLoaded', listener)
    return () => {
      window.removeEventListener('resize', listener)
      window.removeEventListener('DOMContentLoaded', listener)
    }
  }, [])

  return { ...breakpoints }
}

export default useBreakpoint
