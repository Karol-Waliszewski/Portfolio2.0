import { useState, useLayoutEffect, useRef } from 'react'

import isBrowser from 'utils/isBrowser'

function getScrollPosition() {
  if (!isBrowser) return { x: 0, y: 0 }

  return { x: window.scrollX, y: window.scrollY }
}

export default function useScrollPosition(
  wait: number,
  dependencies: any[] = []
): ReturnType<typeof getScrollPosition> {
  const [position, setPosition] = useState(getScrollPosition())

  const throttleTimeout = useRef<NodeJS.Timeout | null>(null)

  const callBack = () => {
    setPosition(getScrollPosition())
    throttleTimeout.current = null
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout.current === null) {
          throttleTimeout.current = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wait, ...dependencies])

  return position
}
