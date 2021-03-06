import { WEB_PORT } from '../shared/config'
import { isProd } from '../shared/util'

const http = require('./app')

http.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Server running on port ${WEB_PORT} ${
      isProd ? '(production)' : '(development).\nKeep "yarn dev:wds" running in an other terminal'
    }.`,
  )
})
