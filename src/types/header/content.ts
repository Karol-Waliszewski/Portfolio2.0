import type ImageType from 'types/image'

type ContentProps = {
  title: string | JSX.Element
  subtext?: string | JSX.Element
  uppertext?: string | JSX.Element
  buttons?: JSX.Element
  image?: ImageType
}

export default ContentProps
