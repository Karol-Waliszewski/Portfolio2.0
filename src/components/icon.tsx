import React from 'react'
import Image from './image'

type IconProps = {
  src: string
  size?: number

  className?: string
}

const Icon: React.FC<IconProps> = ({ src, size, className }) => (
  <Image src={src} alt="" width={size} height={size} className={className} />
)

export default Icon
