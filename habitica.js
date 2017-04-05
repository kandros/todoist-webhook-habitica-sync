const Habitica = require('habitica')
const api = new Habitica({
    id: process.env.HABITICA_USER_ID,
    apiToken: process.env.HABITICA_API_TOKEN,
})

module.exports = function createAndCompleteTask(text) {
    return api.post('/tasks/user', {
        type: 'todo',
        text
    }).then((res) => {
        var task = res.data

        return api.post('/tasks/' + task.id + '/score/up')
    })
}