import { useState, useLayoutEffect, useRef } from 'react'

import isBrowser from 'utils/isBrowser'

function getWindowSize() {
  if (!isBrowser) return { width: 0, height: 0 }

  return { width: window.innerWidth, height: window.innerHeight }
}

export default function useWindowSize(
  wait: number,
  dependencies: any[] = []
): ReturnType<typeof getWindowSize> {
  const [size, setSize] = useState(getWindowSize())

  const throttleTimeout = useRef<NodeJS.Timeout | null>(null)

  const callBack = () => {
    setSize(getWindowSize())
    throttleTimeout.current = null
  }

  useLayoutEffect(() => {
    const handleResize = () => {
      if (wait) {
        if (throttleTimeout.current === null) {
          throttleTimeout.current = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wait, ...dependencies])

  return size
}
