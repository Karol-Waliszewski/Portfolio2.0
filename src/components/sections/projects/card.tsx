import * as React from 'react'
import { Link } from 'gatsby'
import type { ImageDataLike } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Subheading, Text } from 'components/typography'
import Button from 'components/button'
import LazyImage from 'components/lazyImage'
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
  overflow: hidden;
  height: 100%;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
`

const CardImage = styled(LazyImage)`
  width: 100%;
  height: 250px;
  background: ${({ theme }) => theme.colors.light};
`

const CardContent = styled.div`
  padding: 1.75rem;
`

const CardButtons = styled.div``

const CardButton = styled(Button)`
  font-size: ${pxToRem(14)};
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
  console.log(technology)

  return (
    <CardWrapper>
      <CardImage src={thumbnail} alt={alt} objectFit="cover" />
      <CardContent>
        <Subheading>{name}</Subheading>
        <Text>
          {excerpt} <Link to={`/projects${slug}`}>Więcej</Link>
        </Text>
        <CardButtons>
          {live ? (
            <CardButton as="a" href={live} rel="nofollow" marginRight>
              Podgląd
            </CardButton>
          ) : (
            <CardButton disabled marginRight>
              Podgląd
            </CardButton>
          )}

          {github ? (
            <CardButton as="a" href={github} rel="nofollow" outline>
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
