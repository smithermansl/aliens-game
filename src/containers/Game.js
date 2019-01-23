import { connect } from 'react-redux'

import App from '../App'

const mapState = state => ({
  message: state.message 
})

export default connect(mapState)(App)
