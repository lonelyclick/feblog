import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Home from '../../app/Home'

export default function output (req) {
  return ReactDOMServer.renderToString(
    <html>
      <head>
        <title>title</title>
      </head>
      <body>
        <div id="content" dangerouslySetInnerHTML={{ __html: ReactDOMServer.renderToString(<Home />) }} />
        <script src="/assets/Home.js"></script>
      </body>
    </html>
  )
}
