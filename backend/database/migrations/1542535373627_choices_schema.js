'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChoicesSchema extends Schema {
  up () {
    this.create('choices', (table) => {
      table.increments()
      table.string('name')
      table.string('description')
      table.json('options')
      table.integer('parent_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('choices')
  }
}

module.exports = ChoicesSchema
