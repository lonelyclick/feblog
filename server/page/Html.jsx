import React, { Component, PropTypes } from 'react'
import { renderToString } from 'react-dom/server'

export default class Html extends Component {
  static propTypes = {
    children: PropTypes.any,
    displayName: PropTypes.string,
    title: PropTypes.string
  }

  render () {
    const { children, displayName, title } = this.props

    const cssLink = process.env.NODE_ENV === 'production' && (
      <link
        rel="stylesheet"
        href={`/assets/${displayName}.css`}
      />
    )

    return (
      <html>
        <head>
          <title>{title}</title>
          {cssLink}
        </head>
        <body>
          <div
            id="content"
            dangerouslySetInnerHTML={{ __html: renderToString(children) }}
          />
          <script src={`/assets/${displayName}.js`} />
        </body>
      </html>
    )
  }
}
