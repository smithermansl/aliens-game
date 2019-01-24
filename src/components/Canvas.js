import React from 'react'
import PropTypes from 'prop-types'
import Sky from './Sky'
import Ground from './Ground'
import CannonBase from './CannonBase'
import CannonPipe from './CannonPipe'

const Canvas = (props) => {
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}>
      <Sky />
      <Ground />
      <CannonPipe rotation={props.angle} />
      <CannonBase />
        {/* order is important here, svg does not use z-index
        cannon shows above sky because it is defined after */}
    </svg>
  )
}

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
}


export default Canvas
