import React from 'react'
import styled from 'styled-components'
import { Formik } from 'formik'

import Container from 'components/shared/Container'
import Button from 'components/shared/Button'
import { Grid, Row, Col } from 'components/shared/Grid'
import { Heading } from 'components/shared/Typography'
import { Form, Label, Input, Textarea, Info } from 'components/shared/Form'

import media from 'styles/media'

import { FormValues, initialValues, validationSchema } from 'constants/form'

import type ID from 'types/id'

import backgroundFooter from 'assets/images/footer-background.svg'
import backgroundFooterDark from 'assets/images/footer-background-dark.svg'

const ContactWrapper = styled.footer`
  padding: 3rem 0;

  background-image: ${({ theme }) =>
    theme.dark ? `url(${backgroundFooterDark})` : `url(${backgroundFooter})`};
  background-size: auto min(90%, 450px);
  background-repeat: no-repeat;
  background-position: -2px bottom;

  ${media.lg.max} {
    background-size: auto min(85%, 350px);
  }

  ${media.md.max} {
    background-image: none;
  }
`

const Contact: React.FC<ID> = ({ id }) => {
  const formName = 'contact'
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
    fetch('https://portfolio-kw-node-mailer.herokuapp.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(() => {
        setStatus('success')
      })
      .catch(() => {
        setStatus('error')
      })
      .finally(() => {
        setSubmitting(false)
        setTimeout(() => {
          resetForm()
        }, 5000)
      })
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
    <ContactWrapper id={id}>
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
                          <Label htmlFor="message">Wiadomość</Label>
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
                        primary
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
