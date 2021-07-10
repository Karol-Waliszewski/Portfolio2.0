import styled, { css, CSSProperties } from 'styled-components'
import { Breakpoints } from 'styles/theme'
import media from 'styles/media'

type GridProps = {
  fullHeight?: boolean
}

type RowProps = {
  fullHeight?: boolean

  justifyContent?: CSSProperties['justifyContent']
  alignItems?: CSSProperties['alignItems']
}

type ColSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type ColProps = {
  [breakpoint in keyof Breakpoints]?: ColSize
} &
  {
    [breakpoint in keyof Breakpoints as `offset-${breakpoint}`]?: ColSize
  }

export const Grid = styled.div<GridProps>`
  padding-left: calc(${({ theme }) => theme.grid.gap} / 2);
  padding-right: calc(${({ theme }) => theme.grid.gap} / 2);

  ${({ fullHeight }) =>
    fullHeight &&
    css`
      height: 100%;
    `};
`

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: ${({ justifyContent }) => justifyContent ?? 'flex-start'};
  align-items: ${({ alignItems }) => alignItems ?? 'flex-start'};

  margin-left: calc(${({ theme }) => theme.grid.gap} / -2);
  margin-right: calc(${({ theme }) => theme.grid.gap} / -2);

  ${({ fullHeight }) =>
    fullHeight &&
    css`
      height: 100%;
    `};
`

export const Col = styled.div<ColProps>`
  flex: 0 0 auto;
  padding: calc(${({ theme }) => theme.grid.gap} / 2);

  ${(props) =>
    (Object.keys(props.theme.breakpoints) as Array<keyof Breakpoints>)
      .filter((breakpoint) => breakpoint in props)
      .map(
        (breakpoint) =>
          css`
            ${media[breakpoint].min} {
              flex-basis: ${(100 / 12) * props[breakpoint]}%;
              max-width: ${(100 / 12) * props[breakpoint]}%;
              display: block;
            }
          `
      )}

  ${(props) =>
    (Object.keys(props.theme.breakpoints) as Array<keyof Breakpoints>)
      .filter((breakpoint) => `offset-${breakpoint}` in props)
      .map(
        (breakpoint) =>
          css`
            ${media[breakpoint].min} {
              margin-left: ${(100 / 12) * props[`offset-${breakpoint}`]}%;
            }
          `
      )}
`
