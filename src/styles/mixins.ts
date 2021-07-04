/* eslint-disable import/prefer-default-export */
import { css } from 'styled-components'
import { fonts } from './theme'

export const pxToRem = (pixels: number) =>
  pixels / parseInt(fonts.size.replace('px', ''), 10)

export const center = () =>
  css`
    display: flex;
    align-items: center;
    justify-content: center;
  `
