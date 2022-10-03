const http = require('http')

const server = http.createServer((req,res) => {
  if(req.url === '/') {
    res.end(`Welcome to our homepage`)
  }
  else if(req.url === '/about') {
    res.end(`Learn more about our histories`)
  } else {
    res.end(`
  <h2>Oops</h2>
  <p>We can't seem to find the page you requested</p>
  <a href='/'>Back Home</a>
  `)
  }
  
})

server.listen(5000)