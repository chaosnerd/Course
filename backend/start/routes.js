'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
    Route.post('courses', 'CourseController.store')
    Route.get('courses', 'CourseController.index')
    Route.put('courses/:id', 'CourseController.update')
    Route.delete('courses/:id', 'CourseController.delete')
}).prefix('api/course')

Route.group(() => {
  Route.get('all', 'ChoiceController.index')
}).prefix('api/choice')