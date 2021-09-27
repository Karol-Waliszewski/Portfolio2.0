/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type SeoProps = {
  title: string
  description?: string
  meta?: JSX.IntrinsicElements['meta'][]
  lang?: string
}

type SiteMetadata = {
  site: { siteMetadata: { title: string; description: string; author: string } }
}

const Seo: React.FC<SeoProps> = ({ title, description, lang, meta }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery<SiteMetadata>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const defaultTitle = siteMetadata?.title
  const metaDescription = description || siteMetadata.description
  let seoMeta: JSX.IntrinsicElements['meta'][] = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: siteMetadata?.author || ``,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ]

  if (meta) {
    seoMeta = [...seoMeta, ...meta]
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${defaultTitle}`}
      meta={seoMeta}
    />
  )
}

Seo.defaultProps = {
  lang: `pl`,
  meta: [],
}

export default Seo
