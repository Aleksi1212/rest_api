const express = require('express')
const app = express()
const port = 3000
const prog_langs_router = require('./routes/programmingLanguages')

app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    
    .get('/', (req, res) => {
        res.json({ message: 'ok' })
    })

    .use('/programming-languages', prog_langs_router)
    .use((err, req, res, next) => {
        const statusCode = err.statusCode || 500
        console.error(err.message, err.stack);

        res.status(statusCode).json({
            message: err.message
        })
        return
    })

    .listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })