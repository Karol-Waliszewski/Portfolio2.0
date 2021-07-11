import * as React from 'react'
import { PageProps } from 'gatsby'

import Layout from 'components/layout/layout'
import Seo from 'components/layout/seo'

// TODO: 404

const NotFoundPage: React.FC<PageProps> = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
