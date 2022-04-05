const express = require('express')
const app = express()
const port = 3000

app.get('/path', (req, res) => {
  res.send('my saoda!')
})


app.listen(port, () => {
  console.log(`my saoda is listening ${port}`)
})



let a  = "something";