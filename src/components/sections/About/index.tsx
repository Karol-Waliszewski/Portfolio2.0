import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'

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
              <Fade bottom cascade ssrFadeout>
                <div>
                  <Heading as="h2">Trochę o mnie</Heading>
                  <Text>
                    Jestem <Bold>Karol Waliszewski</Bold>, absolwent
                    Politechniki Wrocławskiej z zamiłowaniem do tworzenia
                    zaawansowanych aplikacji internetowych.
                  </Text>
                  <Text>
                    Pracując od 3 lat jako Web Developer, miałem okazję brać
                    udział w różnorodnych projektach. Dzięki temu zdobyłem
                    szerokie doświadczenie i umiejętności, które chętnie
                    wykorzystam w nowych wyzwaniach zawodowych. Poza pracą,
                    jestem entuzjastą street workoutu i regularnie trenuję, aby
                    zachować dobrą formę fizyczną i umysłową.{' '}
                  </Text>
                  <Text>
                    Moje projekty poboczne można znaleźć na moim{' '}
                    <a
                      href="https://github.com/Karol-Waliszewski"
                      rel="noreferrer nofollow"
                      target="_blank"
                    >
                      githubie
                    </a>
                    .
                  </Text>
                </div>
              </Fade>
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
