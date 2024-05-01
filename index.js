const express = require('express')
const app = express()
require('dotenv').config()

const swaggerUi = require('swagger-ui-express')
const fs = require('fs')
const YAML = require('yaml')

const getAllBooks = require('./controllers/getAllBooks.js')
const getById = require('./controllers/getById.js')
const addBook = require('./controllers/addBook.js')
const updateBook = require('./controllers/updateBook.js')
const deleteBook = require('./controllers/deleteBook.js')
const PORT = process.env.PORT
app.use(express.json())

const file = fs.readFileSync('./swagger.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.get('/api/books', getAllBooks)

app.get('/api/books/:id', getById)

app.post('/api/addbook', addBook)

app.put('/api/updatebook/:id', updateBook)

app.delete('/api/deletebook/:id', deleteBook)

app.listen(PORT, () => console.log(`server up ${PORT}`))
