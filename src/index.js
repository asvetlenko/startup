import '@babel/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'

import App from './common/App'
import createReduxStore from './common/createReduxStore'

const history = createBrowserHistory()
const store = createReduxStore(history)

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('react-root')
  )
}

render()
