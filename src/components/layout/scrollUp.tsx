import React from 'react'
import styled from 'styled-components'

import Button from 'components/shared/button'
import Icon from 'components/shared/icon'

import useScrollPosition from 'util/useScroll'
import useWindowSize from 'util/useWindow'

import media from 'styles/media'

import { ActiveRequired } from 'types/active'

import upArrowIcon from 'assets/icons/arrow-up.svg'

type ScrollButtonProps = {
  visible: boolean
  active: boolean
}

const ScrollButton = styled(Button)`
  position: fixed;
  z-index: 5;
  bottom: 2%;
  right: 2%;

  opacity: ${({ visible }: ScrollButtonProps) => (visible ? 1 : 0)};
  pointer-events: ${({ visible }: ScrollButtonProps) =>
    visible ? 'initial' : 'none'};

  transition: right 250ms ease-in-out, opacity 250ms ease;

  ${media.xl.min} {
    right: ${({ active }: ScrollButtonProps) => (active ? '1%' : '2%')};
  }
`

const ScrollUp: React.FC<ActiveRequired> = ({ active }) => {
  const { y } = useScrollPosition(300)
  const { height } = useWindowSize(300)

  const isBrowser = typeof window !== `undefined`
  const visible = y > height / 3

  const scrollTop = () => {
    if (isBrowser) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <ScrollButton square visible={visible} onClick={scrollTop} active={active}>
      <Icon src={upArrowIcon} />
    </ScrollButton>
  )
}

export default ScrollUp
