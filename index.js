const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Testando aplicação!')
})

app.listen(3000, () => {
  console.log('Server starterd on port 3000')
})
