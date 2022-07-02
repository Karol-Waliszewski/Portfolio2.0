import React from 'react'
import { Link } from 'gatsby'
import { rgba } from 'polished'
import styled from 'styled-components'

import { Subheading, Text } from 'components/shared/Typography'
import Button from 'components/shared/Button'
import LazyImage from 'components/shared/LazyImage'
import Badge from 'components/shared/Badge'

import { pxToRem, themeAnimation } from 'styles/mixins'

import type { ImageDataLike } from 'gatsby-plugin-image'

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
  margin-left: 1px;

  text-decoration: none;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  background: ${({ theme }) =>
    theme.dark ? theme.colors.light : theme.colors.white};
  overflow: hidden;

  ${themeAnimation(`box-shadow 200ms ease, transform 200ms ease`)};

  &:hover {
    transform: translateY(-3px) scale(1.015);
    box-shadow: 0 2px 10px
      ${({ theme }) =>
        theme.dark
          ? rgba(String(theme.colors.gray), 0.08)
          : rgba(String(theme.colors.dark), 0.08)};
  }
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

const CardText = styled(Text).attrs({ line: 1.2, size: 15 })`
  margin-top: 0.5rem;
`

const CardButtons = styled.div`
  margin-top: auto;
  padding-top: 0.2rem;
`

const CardButton = styled(Button)`
  font-size: ${pxToRem(14)}rem;
`

const CardTitle = styled(Subheading)`
  margin-bottom: 0.25rem;
`

const StyledLink = styled(Link)`
  text-decoration: none;
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
      <Link to={`/projekty/${slug}`}>
        <CardImage src={thumbnail} alt={alt} objectFit="cover" />
      </Link>
      <CardContent>
        <StyledLink to={`/projekty/${slug}`}>
          <CardTitle as="h3">{name}</CardTitle>
        </StyledLink>
        <CardBadges>{badges}</CardBadges>
        <CardText>
          {excerpt} <Link to={`/projekty/${slug}`}>Więcej</Link>
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
              Live
            </CardButton>
          ) : (
            <CardButton disabled marginRight>
              Live
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
