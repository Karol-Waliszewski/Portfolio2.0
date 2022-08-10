import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Fade } from 'react-reveal'

import media from 'styles/media'

import { Grid, Row, Col } from 'components/shared/Grid'
import { Heading, Text } from 'components/shared/Typography'
import Image from 'components/shared/Image'

import type Props from 'types/header/content'

const HeaderContent = styled(Grid)`
  position: relative;
  z-index: 2;
  height: 100%;

  ${media.lg.max} {
    padding-top: 9rem;
    padding-bottom: 10rem;
    /* margin-bottom: -4rem; */
  }

  ${media.md.max} {
    padding-top: 6rem;
    padding-bottom: 9rem;
    /* margin-bottom: -6rem; */
  }

  ${media.sm.max} {
    padding-top: 6rem;
    padding-bottom: 7rem;
    /* margin-bottom: -5rem; */
  }
`

const HeaderButtons = styled.div`
  margin-top: 1.5rem;
`

const HeaderHeading = styled(Heading)`
  margin-bottom: 0.75rem;

  ${media.md.min} {
    max-width: initial;
  }
`

const HeaderText = styled(Text)`
  margin-bottom: 0.5rem;
`

const floating = keyframes`
  0% {
    transform: translateY(0, -0.75rem, 0);
  }
  100% {
    transform: translate3d(0, 0.75rem, 0);
  }
`

const ImageCol = styled(Col)`
  animation: ${floating} 1.5s ease-in-out infinite alternate;
  z-index: -1;
  ${media.lg.max} {
    display: none;
  }
`

const Header: React.FC<Props> = ({
  title,
  subtext,
  uppertext,
  buttons,
  image,
}) => {
  return (
    <HeaderContent>
      <Row fullHeight alignItems="center">
        <Col xs={12} md={8} lg={6}>
          <Fade bottom cascade ssrFadeout>
            <div>
              {uppertext && <HeaderText>{uppertext}</HeaderText>}
              <HeaderHeading size={54}>{title}</HeaderHeading>
              {subtext && <HeaderText>{subtext}</HeaderText>}
              {buttons && <HeaderButtons>{buttons}</HeaderButtons>}{' '}
            </div>
          </Fade>
        </Col>
        {image && (
          <ImageCol xs={12} md={6}>
            <Image
              height={600}
              src={image.src}
              alt={image.alt}
              objectFit="contain"
              objectPosition="right"
            />
          </ImageCol>
        )}
      </Row>
    </HeaderContent>
  )
}

export default Header
