const db = require('./db')
const helper = require('../helper')
const config = require('../config')

// get all languages
async function getMuliple(page=1) {
    const offset = helper.getOffset(page, config.listPerPage)

    let searchData = `
    SELECT id, lang_name, released_year, githut_rank, pypl_rank, tiobe_rank 
    FROM programming_languages LIMIT ${offset}, ${config.listPerPage}`

    const rows = await db.query(searchData) // query databse with given string
    
    const data = helper.emptyOrRows(rows)
    const meta = {page}

    return { data, meta }
}

// get one language
async function getOne(id=1) {
    let searchOne = `
    SELECT * FROM programming_languages where id = ${id}`

    const result = await db.query(searchOne)

    const data = helper.emptyOrRows(result)
    const meta = {id}

    return{ data, meta }
}

// add new language to database
async function create(prog_lang) {
    let addData = `
    INSERT INTO programming_languages
    (lang_name, released_year, githut_rank, pypl_rank, tiobe_rank) 
    VALUES 
    ('${prog_lang.lang_name}', ${prog_lang.released_year}, ${prog_lang.githut_rank}, ${prog_lang.pypl_rank}, ${prog_lang.tiobe_rank})`

    const result = await db.query(addData) // query database with given string

    let message = 'Error in creating programming language'

    if (result.affectedRows) {
        message = 'Programming language created succesfully'
    }

    return { message }
}

// update languages information
async function update(id, prog_lang) {
    let updateData = `
    UPDATE programming_languages
    SET lang_name='${prog_lang.lang_name}', released_year='${prog_lang.released_year}', githut_rank='${prog_lang.githut_rank}',
    pypl_rank='${prog_lang.pypl_rank}', tiobe_rank='${prog_lang.tiobe_rank}'
    WHERE id=${id}`

    const result = await db.query(updateData) // query database with given string

    let message = 'Error in updating programming language'

    if (result.affectedRows) {
        message = 'Programming language updated succesfully'
    }

    return { message }
}

// remove language from database
async function remove(id) {
    let removeData =`DELETE FROM programming_languages WHERE id=${id}`

    const result = await db.query(removeData) // query database with given string

    let message = 'Error in deleting programming language'

    if (result.affectedRows) {
        message = 'Programming language deleted succesfully'
    }

    return { message }
}

module.exports = { getMuliple, getOne, create, update, remove }