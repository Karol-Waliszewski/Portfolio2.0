import { createGlobalStyle } from 'styled-components'
import Normalize from './normalize'
import Global from './global'

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyles = createGlobalStyle`
    ${Normalize}
    ${Global} 
`

export { default as theme } from './theme'
