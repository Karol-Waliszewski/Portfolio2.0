import * as React from 'react'
import styled from 'styled-components'
import Icon from 'components/icon'
import { Text, Bold } from 'components/typography'

export type SingleTechnologyProps = {
  link: string
  logo: string
  name: string
}

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

const SingleTechnology: React.FC<SingleTechnologyProps> = ({
  link,
  name,
  logo,
}) => {
  return (
    <Wrapper href={link} rel="nofollow" target="_blank">
      <TechnologyIcon src={logo} size={80} />
      <Text>
        <Bold>{name}</Bold>
      </Text>
    </Wrapper>
  )
}

export default SingleTechnology
