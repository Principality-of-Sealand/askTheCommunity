const { User } = require('../../database/schemas');

const usersController = {
  'post': ((req, res) => {
    User.create({
      username: req.body.username,
      imageUrl: req.body.imageUrl
  })
  .then(data => {
      res.status(201).send(data);
  })
  .catch(err => {
      res.status(400).send(err);
  })
  }),
  'getPhoto': ((req, res) => {
    User.find({
      where: {
        id: req.params.id
      }
    })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(400).send(err);
      });
  }),
  // 'get': ((req, res) => {
  //   User.update({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  // }),
  // 'put': ((req, res) => {
  //   User.update({
  //   })
  // })
}

module.exports = {usersController:usersController}