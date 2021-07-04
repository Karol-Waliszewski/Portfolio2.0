import * as React from 'react'
import styled from 'styled-components'
import { ImageDataLike } from 'gatsby-plugin-image'
import Container from 'components/container'
import { Grid, Row, Col } from 'components/grid'
import { Heading, Text, Bold } from 'components/typography'
import LazyImage from 'components/lazyImage'

type AboutProps = {
  image: ImageDataLike
}

const AboutWrapper = styled.section``

const About: React.FC<AboutProps> = ({ image }) => {
  return (
    <AboutWrapper>
      <Container>
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <Heading>Trochę o mnie</Heading>
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
                sprawdzić na moim GitHubie :)
              </Text>
            </Col>
            <Col xs={12} md={5} offset-md={1}>
              <LazyImage
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
