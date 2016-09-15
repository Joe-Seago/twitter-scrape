import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as actions from './redux/actions'
import store from './redux/store'

import Main from './components/Main'

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
      <Main />
    </Provider>, document.getElementById('app')
  )
})
