const Router = require('express').Router();
const { questionsController } = require('../controllers/questionsController.js')
const { usersController } = require('../controllers/usersController.js')

Router.route('/questions/:id')
  .get(questionsController.get)
  .put(questionsController.put)
  .delete(questionsController.delete)
Router.route('/questions')
  .post(questionsController.post)
Router.route('/answers')
  .post(questionsController.giveAnswer)
Router.route('/getPhoto/:id')
  .get(usersController.getPhoto)
// Router.route('/users/change/:id')
//   .put(usersController.put)
Router.route('/getAnswers/:id')
  .get(questionsController.getAnswers)
Router.route('/users')
  .post(usersController.post)

module.exports = {Router:Router}
