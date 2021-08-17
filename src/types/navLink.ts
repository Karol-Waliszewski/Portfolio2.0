type Link = LocalLink | AnchorLink | ExternalLink | ButtonLink

type LocalLink = {
  icon: string
  text: string
  link: `/${string}`
  type: 'local'
}

type AnchorLink = {
  icon: string
  text: string
  link: `#${string}` | `/${string}#${string}`
  type: 'anchor'
}

type ExternalLink = {
  icon: string
  text: string
  link: `https://${string}` | `http://${string}`
  type: 'external'
}

type ButtonLink = {
  icon: string
  text: string
  onClick: () => void
  type: 'button'
}

export default Link
