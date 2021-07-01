import * as React from 'react'
import styled from 'styled-components'

const ContactWrapper = styled.footer``

const Contact: React.FC = () => {
  return (
    <ContactWrapper>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </ContactWrapper>
  )
}

export default Contact
