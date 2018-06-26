const { User } = require('../../database/schemas');
const {pool} = require('../../database/schemas');

const usersController = {
  'post': ((req, res) => {
  //   User.create({
  //     username: req.body.username,
  //     imageUrl: req.body.imageUrl
  // })
  pool.query('INSERT INTO users (username, imageUrl) VALUES ($1, $2)', [req.body.username, req.body.imageUrl])
  .then(data => {
      res.status(201).send(data);
  })
  .catch(err => {
      res.status(400).send(err);
  })
  }),
  'getPhoto': ((req, res) => {
    // User.find({
    //   where: {
    //     id: req.params.id
    //   }
    // })
    pool.query('SELECT * FROM users where id =$1',[req.params.id])
      .then(data => {
        res.status(200).send(data.rows);
      })
      .catch(err => {
        res.status(400).send(err);
      });
  }),
  'put': ((req, res) => {
    pool.query('UPDATE users set (imageUrl) VALUES ($1) WHERE id = $2', [req.body.imageUrl, req.body.username])
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(400).send(err);
      })
  }),
  'delete': ((req, res)=> {
    pool.query('DELETE FROM users where username=$1'[req.body.username])
  })
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