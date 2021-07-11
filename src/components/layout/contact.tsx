import * as React from 'react'
import styled from 'styled-components'
import { Formik } from 'formik'

import Container from 'components/container'
import Button from 'components/button'
import { Grid, Row, Col } from 'components/grid'
import { Heading } from 'components/typography'
import { Form, Label, Input, Textarea } from 'components/form'

import { FormValues, initialValues, validationSchema } from 'util/form'

const ContactWrapper = styled.footer`
  padding: 3rem 0;
`

const Contact: React.FC = () => {
  const onSubmit = (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (arg: boolean) => void }
  ) => {
    setTimeout(() => {
      console.log(values)
      setSubmitting(false)
    }, 2000)
  }

  return (
    <ContactWrapper>
      <Container>
        <Grid>
          <Row>
            <Col xs={12} md={8} offset-md={4}>
              <Grid>
                <Heading>Napisz do mnie!</Heading>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  {({
                    values,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col xs={12} sm={6}>
                          <Label htmlFor="name">Imię</Label>
                          <Input
                            name="name"
                            id="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            error={Boolean(errors.name)}
                          />
                        </Col>
                        <Col xs={12} sm={6}>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            type="email"
                            name="email"
                            id="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            error={Boolean(errors.email)}
                          />
                        </Col>
                        <Col xs={12}>
                          <Label htmlFor="message">Email</Label>
                          <Textarea
                            type="message"
                            name="message"
                            id="message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                            error={Boolean(errors.message)}
                          />
                        </Col>
                      </Row>
                      <Button loading={isSubmitting}>Wyślij!</Button>
                    </Form>
                  )}
                </Formik>
              </Grid>
            </Col>
          </Row>
        </Grid>
      </Container>
    </ContactWrapper>
  )
}

export default Contact
