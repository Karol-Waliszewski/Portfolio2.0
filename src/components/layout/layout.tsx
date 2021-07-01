import * as React from 'react'
import styled from 'styled-components'

type LayoutProps = {
  children: React.ReactNode
}

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 2rem 1rem;
`

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Container>
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </Container>
    </>
  )
}

export default Layout
