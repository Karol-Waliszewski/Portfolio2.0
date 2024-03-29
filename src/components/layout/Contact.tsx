import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
import { Formik, FormikProps } from 'formik'

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
import footerPerson from 'assets/images/person-call.png'

const ContactWrapper = styled.footer`
  position: relative;
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

  ${Container} {
    position: relative;
    z-index: 2;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;

    display: block;
    height: 100%;
    width: 100%;

    background-image: url(${footerPerson});
    background-size: auto min(90%, 400px);
    background-repeat: no-repeat;
    background-position: -2% 105%;

    ${media.lg.max} {
      background-size: auto min(85%, 300px);
    }

    ${media.md.max} {
      content: none;
      background-image: none;
    }
  }
`

const Contact: React.FC<ID> = ({ id }) => {
  const onSubmit = (
    values: FormValues,
    {
      setSubmitting,
      setStatus,
      resetForm,
    }: Pick<
      FormikProps<FormValues>,
      'setSubmitting' | 'setStatus' | 'resetForm'
    >
  ) => {
    fetch('/api/mailer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (res.status === 200) {
          setStatus('success')
        } else {
          setStatus('error')
        }
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
                <Fade bottom ssrFadeouļt>
                  <Heading>Napisz do mnie!</Heading>
                </Fade>
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
                          <Fade bottom cascade ssrFadeout>
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
                          </Fade>
                        </Col>
                        <Col xs={12} sm={6}>
                          <Fade bottom cascade ssrFadeout>
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
                          </Fade>
                        </Col>
                        <Col xs={12}>
                          <Fade bottom cascade ssrFadeout>
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
                              visible={
                                Boolean(errors.message) && touched.message
                              }
                            >
                              {errors.message}
                            </Info>
                          </Fade>
                        </Col>
                      </Row>
                      <Fade bottom ssrFadeout>
                        <Button
                          loading={isSubmitting}
                          success={status === 'success'}
                          danger={status === 'error'}
                          primary
                          disabled={status !== undefined}
                        >
                          {renderMessage(status)}
                        </Button>
                      </Fade>
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
