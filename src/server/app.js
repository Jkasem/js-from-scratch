import compression from 'compression'
import express from 'express'
import { Server } from 'http'
import socketIO from 'socket.io'
// import Redis from 'ioredis'

import routing from './routing'
import { STATIC_PATH } from '../shared/config'
import setUpSocket from './socket'

// const redisAddress = process.env.REDIS_ADDRESS || 'redis://127.0.0.1:6379'
// const redis = new Redis(redisAddress)
// const redisSubscribers = {}
// const channelHistoryMax = 10

const app = express()
// flow-disable-next-line
const http = Server(app)
const io = socketIO(http)
setUpSocket(io)

app.use(compression())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

// function addRedisSubscriber(subscriberKey) {
//   const client = new Redis(redisAddress)

//   client.subscribe(subscriberKey)
//   client.on('message', (channel, message) => {
//     io.emit(subscriberKey, JSON.parse(message))
//   })

//   redisSubscribers[subscriberKey] = client
// }
// addRedisSubscriber('messages')
// addRedisSubscriber('member_add')
// addRedisSubscriber('member_delete')

routing(app)

module.exports = http
