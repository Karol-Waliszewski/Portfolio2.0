import isBrowser from 'utils/isBrowser'

export const scrollToElement = (element: Element | null): boolean => {
  if (element && isBrowser) {
    const behavior: ScrollBehavior = 'smooth'
    const navigation = document.getElementById('navigation')
    if (navigation) {
      const navigationOffset = navigation.offsetHeight
      const elementPosition = (element as HTMLElement).offsetTop
      const offsetPosition = elementPosition - navigationOffset
      window.scrollTo({ top: offsetPosition, behavior })
    } else {
      element.scrollIntoView({ behavior })
    }
    return true
  }
  return false
}

export const scrollToSelector = (selector: string): boolean => {
  if (selector && isBrowser) {
    const element = document.querySelector(selector)
    return scrollToElement(element)
  }
  return false
}

export const scrollTop = (): boolean => {
  if (isBrowser) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return true
  }
  return false
}
