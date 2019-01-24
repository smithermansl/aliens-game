import React from 'react'
import { skyAndGroundWidth } from '../utils/constants'

const Sky = () => {
  const height = 1200,
    style = {
      fill: '#D0C6D0'
    }

  return (
    <rect
      style={style}
      x={skyAndGroundWidth / -2}
      y={100 - height}
      width={skyAndGroundWidth}
      height={height}
    />
  )


}

export default Sky
