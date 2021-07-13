import React from 'react'

import Image from 'components/shared/image'

type IconProps = {
  src: string
  size?: number

  className?: string
}

const Icon: React.FC<IconProps> = ({ src, size, className }) => (
  <Image
    src={src}
    alt=""
    width={size}
    height={size}
    className={className}
    objectFit="contain"
    objectPosition="center"
  />
)

Icon.defaultProps = { size: 16 }

export default Icon
