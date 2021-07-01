import { CSSProperties } from 'styled-components'

declare module '*.png' {
  const value: any
  export = value
}

declare module '*.jpg' {
  const value: any
  export = value
}

declare module '*.jpeg' {
  const value: any
  export = value
}

declare module '*.gif' {
  const value: any
  export = value
}

declare module 'styled-components' {
  export interface DefaultTheme {
    sheet: {
      margins: CSSProperties['margin']
    }
  }
}
