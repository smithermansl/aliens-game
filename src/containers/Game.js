import { connect } from 'react-redux'

import App from '../App'
import { moveObjects } from '../actions'

const mapState = state => ({
  angle: state.angle
})

const mapDispatch = dispatch => ({
  moveObjects: mousePosition => dispatch(moveObjects(mousePosition))
})

export default connect(mapState, mapDispatch)(App)
