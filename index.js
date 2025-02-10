const pipe = Pear.worker.pipe()

pipe.on('data', data => {
  const message = Buffer.from(data).toString('utf8')

  console.log('[From worker]:', message)

  if ('PING' === message) return pipe.write('PONG')

  const lodash = import('lodash')

  console.log('[From worker]:', lodash)

  pipe.write('lodash loaded')
})
