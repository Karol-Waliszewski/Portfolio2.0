import React from 'react'
import { Link, PageProps } from 'gatsby'

import Layout from 'components/layout'
import Seo from 'components/layout/Seo'
import Header from 'components/layout/Header/Common'
import Button from 'components/shared/Button'

// TODO: 404

const NotFoundPage: React.FC<PageProps> = () => (
  <Layout>
    <Seo title="404" />
    <Header
      title="Ups, taka strona nie istnieje"
      subtext="Chyba się zgubiłeś"
      buttons={
        <>
          <Button as={Link} to="/" primary>
            Strona główna
          </Button>
        </>
      }
    />
  </Layout>
)

export default NotFoundPage
