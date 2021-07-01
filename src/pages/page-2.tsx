import * as React from 'react'
import { PageProps, Link } from 'gatsby'

import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'

const SecondPage: React.FC<PageProps> = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
