require('dotenv').config()

const {json} = require('micro')
const post = require('micro-post')
const createAndCompleteHabiticaTask = require('./habitica')

module.exports = post(async function (req, res) {
    const data = await json(req)
    const result = await createAndCompleteHabiticaTask(data.event_data.content)
    console.log(result)

    return result
})