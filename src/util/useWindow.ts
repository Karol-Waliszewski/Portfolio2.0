import { useState, useLayoutEffect } from 'react'

const isBrowser = typeof window !== `undefined`

function getWindowSize() {
  if (!isBrowser) return { width: 0, height: 0 }

  return { width: window.innerWidth, height: window.innerHeight }
}

export default function useWindowSize(wait: number, dependencies: any[] = []) {
  const [size, setSize] = useState(getWindowSize())

  let throttleTimeout: NodeJS.Timeout | null = null

  const callBack = () => {
    setSize(getWindowSize())
    throttleTimeout = null
  }

  useLayoutEffect(() => {
    const handleResize = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, dependencies)

  return size
}
