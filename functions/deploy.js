const https = require('https')

// Netlify deploy URL
const url = "https://api.netlify.com/build_hooks/5c0d4162e39e7c01ea49e81a"

exports.handler = (event, context, callback) => {
  const hostname = url.match(/^https?:\/\/([^/]+)\/.*$/)[1]
  const path = url.match(/^https?:\/\/(?:[^/]+)(\/.*)$/)[1]

  console.log(`Hostname: ${hostname}`)
  console.log(`Path: ${path}`)

  const hookReq = https.request({
    hostname,
    path,
    method: 'POST'
  }, (res) => {
    const data = []
    res.on('data', (c) => {
      data.push(c)
    })
    res.on('end', () => {
      const buf = Buffer.concat(data)
      console.log(buf.toString('base64'))
      callback(null, {
        statusCode: 200,
        body: 'ok'
      })
    })
    res.on('error', (e) => {
      console.error(e)
    })
  })

  hookReq.on('error', (e) => {
    console.error(e)
  })
  hookReq.write(JSON.stringify({}))
  hookReq.end()
}
