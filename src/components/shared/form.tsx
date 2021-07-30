import styled, { css } from 'styled-components'

import { pxToRem, themeAnimation } from 'styles/mixins'

type InputProps = {
  error?: boolean
}

type InfoProps = {
  visible?: boolean

  error?: boolean
  success?: boolean
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Info = styled.span<InfoProps>`
  display: block;
  min-height: ${pxToRem(23)}rem;

  font-size: ${pxToRem(12)}rem;
  font-weight: 500;

  visibility: hidden;
  opacity: 0;

  ${themeAnimation()};

  ${({ visible }) =>
    visible &&
    css`
      visibility: visible;
      opacity: 1;
    `}

  ${({ success }) =>
    success &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `}

  ${({ error }) =>
    error &&
    css`
      color: ${({ theme }) => theme.colors.danger};
    `}
`

export const Label = styled.label`
  display: block;
  margin-bottom: 0.4rem;

  font-weight: 700;
  font-size: ${pxToRem(18)}rem;
  color: ${({ theme }) => theme.colors.text};

  ${themeAnimation()};
`

export const Input = styled.input<InputProps>`
  display: block;
  width: 100%;
  padding: ${pxToRem(8)}rem ${pxToRem(14)}rem;

  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;

  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors.danger : theme.colors.lightgray};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.lightgray};

  ${themeAnimation()};
`

export const Textarea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 150px;
  resize: vertical;

  ${themeAnimation()};
`
