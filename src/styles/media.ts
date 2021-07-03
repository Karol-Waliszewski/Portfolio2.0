/* eslint-disable no-param-reassign */
import { breakpoints, Breakpoints } from './theme'

type Media = {
  [key in keyof Breakpoints]: {
    min: string
    max: string
  }
}

const min = (minWidth: number) => `@media (min-width: ${minWidth}px)`
const max = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`

const generateMedia: () => Media = () => {
  return (Object.keys(breakpoints) as Array<keyof Breakpoints>).reduce(
    (media, breakpoint) => {
      media[breakpoint] = {
        min: min(breakpoints[breakpoint]),
        max: max(breakpoints[breakpoint]),
      }
      return media
    },
    {} as Media
  )
}

export default generateMedia()
