import React from 'react'
import styled, { keyframes, css } from 'styled-components'

import { Grid, Row } from 'components/shared/Grid'
import SingleTechnology from 'components/sections/Technology/Single'

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
    transform: translate3d(-50%,0,0);
  }
`

const LogosWrapper = styled.div<{ center: boolean }>`
  width: 100%;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  overflow: hidden;

  ${({ center }) =>
    center &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`

const StyledGrid = styled(Grid).withConfig({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  shouldForwardProp: (prop) => prop !== 'speed',
})<{ speed: number }>`
  width: fit-content;
  white-space: nowrap;
  padding: 0;

  animation: ${SlideAnimation} ${({ speed }) => speed}s linear infinite;
  ${media.md.max} {
    animation-duration: ${({ speed }) => speed / 1.5}s;
  }
`

const StyledRow = styled(Row)`
  display: inline-flex;
  flex-wrap: nowrap;
  margin: 0;
`

const SingleTechnologyWrapper = styled.div`
  min-width: 150px;
  margin: 0 1rem;

  ${media.lg.max} {
    min-width: 130px;
  }

  ${media.md.max} {
    min-width: 100px;
  }

  ${media.sm.max} {
    min-width: 90px;
  }
`

const TechnologySwiper: React.FC<TechnologySwiperProps> = ({
  speed,
  slides,
}) => {
  const slidesDOM = slides.map((el) => (
    <SingleTechnologyWrapper key={el.name}>
      <SingleTechnology name={el.name} logo={el.logo} link={el.link} />
    </SingleTechnologyWrapper>
  ))

  return (
    <LogosWrapper center={speed === 0}>
      <StyledGrid speed={speed}>
        <StyledRow>{slidesDOM}</StyledRow>
        {speed > 0 && <StyledRow>{slidesDOM}</StyledRow>}
      </StyledGrid>
    </LogosWrapper>
  )
}

export default TechnologySwiper
