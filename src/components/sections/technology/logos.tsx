import React from 'react'
import styled, { keyframes } from 'styled-components'

import { Grid, Row, Col } from 'components/shared/grid'
import SingleTechnology from 'components/sections/technology/single'

import media from 'styles/media'

import type SingleTechnologyProps from 'types/technologies'

type TechnologySwiperProps = {
  speed: number
  slides: SingleTechnologyProps[]
}

const SlideAnimation = keyframes`
  0% {
    transform: translate3d(0,0,0);
  }
  100% {
    transform: translate3d(-100%,0,0);
  }
`

const LogosWrapper = styled.div`
  width: 100%;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  overflow: hidden;
`

const StyledGrid = styled(Grid).withConfig({
  shouldForwardProp: (prop) => prop !== 'speed', // TODO: fix
})<{ speed: number }>`
  white-space: nowrap;
  padding: 0;

  animation: ${SlideAnimation} ${({ speed }) => speed}s linear infinite;
  ${media.sm.max} {
    animation-duration: ${({ speed }) => speed / 2}s;
  }
`

// TODO: fix on mobile
const StyledRow = styled(Row)`
  width: 100%;
  display: inline-flex;
  flex-wrap: nowrap;
  margin: 0;
`

const TechnologySwiper: React.FC<TechnologySwiperProps> = ({
  speed,
  slides,
}) => {
  const slidesDOM = slides.map((el) => (
    <Col key={el.name} xs={5} sm={3} lg={2}>
      <SingleTechnology name={el.name} logo={el.logo} link={el.link} />
    </Col>
  ))

  return (
    <LogosWrapper>
      <StyledGrid speed={speed}>
        <StyledRow>{slidesDOM}</StyledRow>
        <StyledRow>{slidesDOM}</StyledRow>
      </StyledGrid>
    </LogosWrapper>
  )
}

export default TechnologySwiper
