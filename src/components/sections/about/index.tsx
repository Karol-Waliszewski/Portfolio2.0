import React from 'react'
import styled from 'styled-components'

import Container from 'components/shared/Container'
import { Grid, Row, Col } from 'components/shared/Grid'
import { Heading, Text, Bold } from 'components/shared/Typography'
import LazyImage from 'components/shared/LazyImage'

import type { ImageDataLike } from 'gatsby-plugin-image'
import type ID from 'types/id'

type AboutProps = {
  image: ImageDataLike
} & ID

const AboutWrapper = styled.section`
  padding: 4rem 0;
`

const StyledLazyImage = styled(LazyImage)`
  border-radius: 4px;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colors.primary};
`

const About: React.FC<AboutProps> = ({ image, id }) => {
  return (
    <AboutWrapper id={id}>
      <Container>
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <Heading as="h2">Trochę o mnie</Heading>
              <Text>
                Nazywam się <Bold>Karol Waliszewski</Bold>. Jestem studentem
                Politechniki Wrocławskiej z zamiłowaniem do programowania i
                street workoutu.
              </Text>
              <Text>
                Odkąd miałem dostęp do gier, wolałem je edytować, niż w nie
                grać, jednak przygodę stricte z programowaniem rozpocząłem na
                początku liceum. Najpierw był to C++, jednak po około połowie
                roku spróbowałem Web Developmentu i to było to!
              </Text>
              <Text>
                Obecnie pracuję jako Web Deweloper i tworzę wiele zaawansowanych
                aplikacji internetowych w mojej pracy. Jeśli mam trochę czasu,
                to pracuję też nad własnymi projektami pobocznymi, które możesz
                sprawdzić na moim{' '}
                <a
                  href="https://github.com/Karol-Waliszewski"
                  rel="noreferrer nofollow"
                  target="_blank"
                >
                  githubie
                </a>{' '}
                :)
              </Text>
            </Col>
            <Col xs={12} md={5} offset-md={1}>
              <StyledLazyImage
                src={image}
                alt="Person coding on a laptop"
                objectFit="contain"
                objectPosition="right"
              />
            </Col>
          </Row>
        </Grid>
      </Container>
    </AboutWrapper>
  )
}

export default About
