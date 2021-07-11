import * as React from 'react'
import styled from 'styled-components'

import Container from 'components/container'
import Button from 'components/button'
import { Grid, Row, Col } from 'components/grid'
import { Heading } from 'components/typography'
import { Form, Label, Input, Textarea } from 'components/form'

const ContactWrapper = styled.footer`
  padding: 3rem 0;
`

const Contact: React.FC = () => {
  return (
    <ContactWrapper>
      <Container>
        <Grid>
          <Row>
            <Col xs={12} md={8} offset-md={4}>
              <Grid>
                <Heading>Napisz do mnie!</Heading>
                <Form>
                  <Row>
                    <Col xs={12} sm={6}>
                      <Label htmlFor="name">Imię</Label>
                      <Input required name="name" id="name" />
                    </Col>
                    <Col xs={12} sm={6}>
                      <Label htmlFor="email">Email</Label>
                      <Input type="email" required name="email" id="email" />
                    </Col>
                    <Col xs={12}>
                      <Label htmlFor="message">Email</Label>
                      <Textarea
                        type="message"
                        required
                        name="message"
                        id="message"
                      />
                    </Col>
                  </Row>
                  <Button>Wyślij!</Button>
                </Form>
              </Grid>
            </Col>
          </Row>
        </Grid>
      </Container>
    </ContactWrapper>
  )
}

export default Contact
