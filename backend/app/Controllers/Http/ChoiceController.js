'use strict'
const Choice = use('App/Models/Choice')
class ChoiceController {
    async index ({response}) {
        let choices = await Choice.all()
        return response.json(choices)
    }
}

module.exports = ChoiceController
