import express from 'express'

const app = express()

app.get('/', (request, response) => {
  response.json({ message: 'OK' })
})

app.listen(3333, () => console.log('Server start'))
