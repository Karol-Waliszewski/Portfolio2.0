import React from 'react'
import styled, { css } from 'styled-components'

import Button from 'components/shared/Button'
import Icon from 'components/shared/Icon'

import useScrollPosition from 'hooks/useScroll'
import useWindowSize from 'hooks/useWindow'

import { scrollTop } from 'utils/scrollTo'

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

  transition: right 250ms ease-in-out, opacity 250ms ease, transform 250ms ease;

  ${media.xl.min} {
    right: ${({ active }: ScrollButtonProps) => (active ? '1%' : '2%')};
  }

  &:hover {
    transform: translate3d(0, -2px, 0);
  }
`

const ScrollUp: React.FC<ActiveRequired> = ({ active }) => {
  const { y } = useScrollPosition(300)
  const { height } = useWindowSize(300)

  const visible = y > height / 3

  return (
    <ScrollButton square visible={visible} onClick={scrollTop} active={active}>
      <Icon src={upArrowIcon} />
    </ScrollButton>
  )
}

export default ScrollUp
