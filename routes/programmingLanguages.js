const express = require('express')
const router = express.Router()
const prog_langs = require('../services/programmingLanguages')


router
    // api get request calls getMultiple function
    .get('/', async function(req, res, next) {
        try {
            res.json(
                await prog_langs.getMuliple(req.query.page)
            )
        }
        catch (err) {
            console.log(`Error while getting programming languages ${err.message}`)
            next(err)
        }
    })

    // api get request calls getOne function
    .get('/:id', async function(req, res, next) {
        try {
            res.json(
                await prog_langs.getOne(req.params.id)
            )
        }

        catch(err) {
            console.log(`Error while getting programming language ${err.message}`);
            next(err)
        }
    })

    // api post request calls create funciton
    .post('/', async function(req, res, next) {
        try {
            res.json(await prog_langs.create(req.body))
        } 
        catch (err) {
            console.error(`Error while creating programming language ${err.message}`)
            next(err)
        }
    })

    // api put request calls update function
    .put('/:id', async function(req, res, next) {
        try {
            res.json(await prog_langs.update(req.params.id, req.body))
        }
        catch (err) {
            console.error(`Error while updating programming language ${err.message}`);
            next(err)
        }
    })

    // api delete request calls remove function
    .delete('/:id', async function(req, res, next) {
        try {
            res.json(await prog_langs.remove(req.params.id))
        }
        catch (err) {
            console.error(`Error while deleting programming language ${err.message}`);
            next(err)
        }
    })

module.exports = router