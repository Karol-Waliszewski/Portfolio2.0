type Link = LocalLink | AnchorLink | ExternalLink

type LocalLink = {
  icon: string
  text: string
  link: `/${string}`
  linkType: 'local'
}

type AnchorLink = {
  icon: string
  text: string
  link: `#${string}`
  linkType: 'anchor'
}

type ExternalLink = {
  icon: string
  text: string
  link: `https://${string}` | `http://${string}`
  linkType: 'external'
}

export default Link
