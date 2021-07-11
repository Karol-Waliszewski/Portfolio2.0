import * as React from 'react'
import styled from 'styled-components'

import Container from 'components/container'
import { Grid, Row, Col } from 'components/grid'
import { Heading, Text } from 'components/typography'
// import Image from 'components/image'
import Button from 'components/button'

const HeaderWrapper = styled.header`
  height: ${({ theme }) => `calc(100vh - ${theme.sheet.margins})`};
  background: ${({ theme }) => theme.colors.primary};
`

const HeaderContent = styled(Grid)`
  height: 100%;
`

const HeaderButtons = styled.div`
  margin-top: 1.5rem;
`

const HeaderHeading = styled(Heading)`
  margin-bottom: 0.75rem;
  max-width: initial;
`

const HeaderText = styled(Text)`
  margin-bottom: 0.5rem;
`

type HeaderProps = {
  title: string
  github?: string
  live?: string
}

const Header: React.FC<HeaderProps> = ({ title, github, live }) => {
  return (
    <HeaderWrapper>
      <Container fullHeight>
        <HeaderContent>
          <Row fullHeight alignItems="center">
            <Col xs={12} md={6}>
              <HeaderHeading size={54} light>
                {title}
              </HeaderHeading>
              <HeaderText>
                Zajmuje się tworzeniem stron internetowych i aplikacji webowych.
              </HeaderText>
              <HeaderButtons>
                {live && (
                  <Button
                    marginRight
                    as="a"
                    href={live}
                    target="_blank"
                    rel="noreferrer nofollow"
                    light
                  >
                    Podgląd
                  </Button>
                )}
                {github && (
                  <Button
                    as="a"
                    href={github}
                    target="_blank"
                    rel="noreferrer nofollow"
                    light
                  >
                    Github
                  </Button>
                )}
              </HeaderButtons>
            </Col>
            <Col xs={12} md={6} />
          </Row>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
