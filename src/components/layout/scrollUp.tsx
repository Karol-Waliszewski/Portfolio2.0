import React from 'react'
import styled from 'styled-components'

import Button from 'components/shared/button'
import Icon from 'components/shared/icon'

import useScrollPosition from 'util/useScroll'
import useWindowSize from 'util/useWindow'

import upArrowIcon from 'assets/icons/arrow-up.svg'

type ScrollButtonProps = {
  visible: boolean
}

const ScrollButton = styled(Button)`
  position: fixed;
  bottom: 2%;
  right: 2%;

  opacity: ${({ visible }: ScrollButtonProps) => (visible ? 1 : 0)};
  pointer-events: ${({ visible }: ScrollButtonProps) =>
    visible ? 'initial' : 'none'};

  transition: opacity 250ms ease;
`

const ScrollUp: React.FC = () => {
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
    <ScrollButton square visible={visible} onClick={scrollTop}>
      <Icon src={upArrowIcon} />
    </ScrollButton>
  )
}

export default ScrollUp
