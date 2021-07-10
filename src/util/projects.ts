import { ImageDataLike } from 'gatsby-plugin-image'

export type Project = {
  frontmatter: {
    slug: string
    name: string
    technology: string[] | []
    thumbnail: ImageDataLike
    github?: string
    live?: string
  }
  html?: string
  excerpt?: string
}

const PROJECTS = []

export default PROJECTS
