import * as React from 'react'
import styled from 'styled-components'

import Icon from 'components/icon'
import { Text, Bold } from 'components/typography'

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
`

const SingleTechnology: React.FC<TechnologyProps> = ({ link, name, logo }) => {
  return (
    <Wrapper href={link} rel="noreferrer nofollow" target="_blank">
      <TechnologyIcon src={logo} size={80} />
      <Text>
        <Bold>{name}</Bold>
      </Text>
    </Wrapper>
  )
}

export default SingleTechnology
