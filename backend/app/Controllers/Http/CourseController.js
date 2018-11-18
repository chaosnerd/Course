'use strict'
const Course = use('App/Models/Course')

const Database = use('Database')

class CourseController {
    async index ({response}) {
        let courses = await Course.all()
        return response.json(courses)
    }

    async store ({request, response}) {
        const courseInfo = request.only(['name_en', 'name_th', 'major_en', 'major_th' , 'faculty_choice_id', 'degrees_choice_id', 'degree_name_en', 'degree_name_th', 'degree_short_en', 'degree_short_th'])

        const course = new Course()
        course.name_th = courseInfo.name_th
        course.name_en = courseInfo.name_en
        course.major_th = courseInfo.major_th
        course.major_en = courseInfo.major_en
        course.degrees_choice_id = courseInfo.degrees_choice_id
        course.degree_name_th = courseInfo.degree_name_th
        course.degree_name_en = courseInfo.degree_name_en
        course.degree_short_th = courseInfo.degree_short_th
        course.degree_short_en = courseInfo.degree_short_en
        course.faculty_choice_id = courseInfo.faculty_choice_id
        await course.save()
        return response.status(201).json(course)
    }

    async update ({params, request, response}) {
        const courseInfo = request.only(['name_en', 'name_th', 'major_en', 'major_th' , 'faculty_choice_id', 'degrees_choice_id', 'degree_name_en', 'degree_name_th', 'degree_short_en', 'degree_short_th'])

        const course = await Course.find(params.id)
        if (!course) {
          return response.status(404).json({data: 'Course not found'})
        }
        course.name_th = courseInfo.name_th
        course.name_en = courseInfo.name_en
        course.major_th = courseInfo.major_th
        course.major_en = courseInfo.major_en
        course.degrees_choice_id = courseInfo.degrees_choice_id
        // course.degrees_choice_id = 1
        course.degree_name_th = courseInfo.degree_name_th
        course.degree_name_en = courseInfo.degree_name_en
        course.degree_short_th = courseInfo.degree_short_th
        course.degree_short_en = courseInfo.degree_short_en
        course.faculty_choice_id = courseInfo.faculty_choice_id
        await course.save()

        return response.status(200).json(course)
    }

    async delete ({params, response}) {
        const course = await Course.find(params.id)
        if (!course) {
            return response.status(404).json({data: 'Course not found'})
          }
        await course.delete()
        
        return response.status(204).json(null)
    }
}

module.exports = CourseController
