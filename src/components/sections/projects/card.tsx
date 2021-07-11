import * as React from 'react'
import { Link } from 'gatsby'
import type { ImageDataLike } from 'gatsby-plugin-image'
import styled from 'styled-components'

import { Subheading, Text } from 'components/typography'
import Button from 'components/button'
import LazyImage from 'components/lazyImage'
import Badge from 'components/badge'
import { pxToRem } from 'styles/mixins'

type CardProps = {
  slug: string
  name: string
  excerpt: string
  technology: string[] | []
  thumbnail: ImageDataLike
  alt: string
  github?: string
  live?: string
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 2px);
  width: calc(100% - 3px);

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  overflow: hidden;
`

const CardImage = styled(LazyImage)`
  width: 100%;
  height: 220px;
  background: ${({ theme }) => theme.colors.light};
`

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  padding: 1.75rem;
`

const CardText = styled(Text)`
  margin-top: auto;
`

const CardButtons = styled.div`
  margin-top: 0.5rem;
`

const CardButton = styled(Button)`
  font-size: ${pxToRem(14)}rem;
`

const CardTitle = styled(Subheading)`
  margin-bottom: 0.25rem;
`

const CardBadges = styled.div`
  margin-bottom: 1rem;
`

const Card: React.FC<CardProps> = ({
  slug,
  name,
  excerpt,
  technology,
  thumbnail,
  alt,
  live,
  github,
}) => {
  const badges = technology.map((el) => <Badge marginRight>{el}</Badge>)

  return (
    <CardWrapper>
      <CardImage src={thumbnail} alt={alt} objectFit="cover" />
      <CardContent>
        <CardTitle as="h3">{name}</CardTitle>
        <CardBadges>{badges}</CardBadges>
        <CardText>
          {excerpt} <Link to={`/projects${slug}`}>Więcej</Link>
        </CardText>
        <CardButtons>
          {live ? (
            <CardButton
              as="a"
              href={live}
              rel="noreferrer nofollow"
              target="_blank"
              marginRight
            >
              Podgląd
            </CardButton>
          ) : (
            <CardButton disabled marginRight>
              Podgląd
            </CardButton>
          )}

          {github ? (
            <CardButton
              as="a"
              href={github}
              rel="noreferrer nofollow"
              target="_blank"
              outline
            >
              Github
            </CardButton>
          ) : (
            <CardButton disabled outline>
              Github
            </CardButton>
          )}
        </CardButtons>
      </CardContent>
    </CardWrapper>
  )
}

export default Card
