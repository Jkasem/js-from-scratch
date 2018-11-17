// @flow

import React from 'react'

import HelloButton from '../container/hello-button'
import Message from '../container/message'
import HelloAsyncButton from '../container/hello-async-button'
import MessageAsync from '../container/message-async'

const HelloPage = () => (
  <div>
    <Message />
    <HelloButton />
    <MessageAsync />
    <HelloAsyncButton />
  </div>
)

export default HelloPage
