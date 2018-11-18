'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CoursesSchema extends Schema {
  up () {
    this.create('courses', (table) => {
      table.increments()
      table.string('name_th')
      table.string('name_en')
      table.string('major_th')
      table.string('major_en')
      table.integer('degrees_choice_id')
      table.string('degree_name_th')
      table.string('degree_name_en')
      table.string('degree_short_th')
      table.string('degree_short_en')
      table.integer('faculty_choice_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('courses')
  }
}

module.exports = CoursesSchema
