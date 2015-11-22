import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Home from '../../app/Home'
import Html from './Html'

export default function output () {
  return ReactDOMServer.renderToString(
    <Html
      title="Home"
      displayName="Home">
      <Home />
    </Html>
  )
}
