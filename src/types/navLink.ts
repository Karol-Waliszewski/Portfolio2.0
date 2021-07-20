type Link = LocalLink | AnchorLink | ExternalLink

type LocalLink = {
  icon: string
  text: string
  link: `/${string}`
  type: 'local'
}

type AnchorLink = {
  icon: string
  text: string
  link: `#${string}`
  type: 'anchor'
}

type ExternalLink = {
  icon: string
  text: string
  link: `https://${string}` | `http://${string}`
  type: 'external'
}

export default Link
