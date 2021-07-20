import { ImageDataLike } from 'gatsby-plugin-image'

type Project = {
  frontmatter: {
    slug: string
    name: string
    technology: string[] | []
    thumbnail: ImageDataLike
    thumbnailAlt: string
    github?: string
    live?: string
  }
  html: string
  excerpt: string
}

export default Project
