/* eslint-disable import/prefer-default-export */
import { CSSProperties } from 'styled-components'
import { fonts } from 'styles/theme'

export const pxToRem = (pixels: number): number =>
  pixels / parseInt(fonts.size.replace('px', ''), 10)

export const themeAnimation = (
  transition: CSSProperties['transition'] = undefined
): string => {
  const styles = ['color', 'background'].map(
    (property) => `${property} 125ms ease`
  )

  if (transition) return `transition: ${styles.join(', ')}, ${transition}`

  return `transition: ${styles.join(', ')}`
}
