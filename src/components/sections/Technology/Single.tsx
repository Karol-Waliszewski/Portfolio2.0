import React from 'react'
import styled from 'styled-components'

import Icon from 'components/shared/Icon'
import { Text, Bold } from 'components/shared/Typography'

import media from 'styles/media'

import type TechnologyProps from 'types/technologies'

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-decoration: none;
`

const TechnologyIcon = styled(Icon)`
  margin-bottom: 1rem;

  filter: grayscale(1);

  transition: filter 100ms ease;

  &:hover {
    filter: grayscale(0);
  }

  ${media.md.max} {
    margin-bottom: 0.3rem;
    max-width: 60px;
  }

  ${media.sm.max} {
    margin-bottom: 0.2rem;
    max-width: 55px;
  }
`

const SingleTechnology: React.FC<TechnologyProps> = ({ link, name, logo }) => {
  return (
    <Wrapper href={link} rel="noreferrer nofollow" target="_blank">
      <TechnologyIcon src={logo} size={70} />
      <Text align="center">
        <Bold>{name}</Bold>
      </Text>
    </Wrapper>
  )
}

export default SingleTechnology
