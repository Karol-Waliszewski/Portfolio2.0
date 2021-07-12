import * as React from 'react'
import styled from 'styled-components'
import { Formik } from 'formik'

import Container from 'components/container'
import Button from 'components/button'
import { Grid, Row, Col } from 'components/grid'
import { Heading } from 'components/typography'
import { Form, Label, Input, Textarea, Info } from 'components/form'

import { FormValues, initialValues, validationSchema } from 'util/form'

import backgroundFooter from 'assets/images/footer-background.svg'

const ContactWrapper = styled.footer`
  padding: 3rem 0;

  background-image: url(${backgroundFooter});
  background-size: auto 90%;
  background-repeat: no-repeat;
  background-position: -2px bottom;
`

const Contact: React.FC = () => {
  const onSubmit = (
    values: FormValues,
    {
      setSubmitting,
      setStatus,
      resetForm,
    }: {
      setSubmitting: (arg: boolean) => void
      setStatus: (arg: any) => void
      resetForm: () => void
    }
  ) => {
    setTimeout(() => {
      console.log(values)
      setSubmitting(false)
      setStatus('success')
      setTimeout(() => {
        resetForm()
      }, 5000)
    }, 2000)
  }

  const renderMessage = (status: any) => {
    switch (status) {
      case 'success':
        return 'Wysłano pomyślnie'
      case 'error':
        return 'Błąd wysyłania'
      default:
        return 'Wyślij!'
    }
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
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    status,
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
                            error={Boolean(errors.name) && touched.name}
                          />
                          <Info
                            error
                            visible={Boolean(errors.name) && touched.name}
                          >
                            {errors.name}
                          </Info>
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
                            error={Boolean(errors.email) && touched.email}
                          />
                          <Info
                            error
                            visible={Boolean(errors.email) && touched.email}
                          >
                            {errors.email}
                          </Info>
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
                            error={Boolean(errors.message) && touched.message}
                          />
                          <Info
                            error
                            visible={Boolean(errors.message) && touched.message}
                          >
                            {errors.message}
                          </Info>
                        </Col>
                      </Row>
                      <Button
                        loading={isSubmitting}
                        success={status === 'success'}
                        danger={status === 'error'}
                        disabled={status !== undefined}
                      >
                        {renderMessage(status)}
                      </Button>
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
