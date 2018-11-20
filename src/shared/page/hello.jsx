// @flow

import React from 'react'
import Helmet from 'react-helmet'

import HelloButton from '../container/hello-button'
import Message from '../container/message'
import HelloAsyncButton from '../container/hello-async-button'
import MessageAsync from '../container/message-async'

const title = 'Hello Page'

const HelloPage = () => (
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello' },
        { property: 'og:title', content: title },
      ]}
    />
    <Message />
    <HelloButton />
    <MessageAsync />
    <HelloAsyncButton />
  </div>
)

export default HelloPage
