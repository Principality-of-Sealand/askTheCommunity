const {pool} = require('../../database/schemas');

const usersController = {
  'post': ((req, res) => {
  const text = 'INSERT INTO users (username, imageUrl) VALUES ($1, $2)'
  let values = [req.body.username, req.body.imageUrl]
  pool.query(text, values)
  .then(data => {
      res.status(201).send(data);
  })
  .catch(err => {
      res.status(400).send(err);
  })
  }),
  'getPhoto': ((req, res) => {
    const text = 'SELECT * FROM users where id = $1'
    let values = [req.params.id]
    pool.query(text, values)
      .then(data => {
        res.status(200).send(data.rows);
      })
      .catch(err => {
        res.status(400).send(err);
      });
  }),
  'put': ((req, res) => {
    const text = 'UPDATE users set (imageUrl) = ($1) WHERE username = $2'
    let values = [req.body.imageUrl, req.body.username]
    pool.query(text, values)
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(400).send(err);
      })
  }),
  'delete': ((req, res)=> {
    const text = 'DELETE FROM users where username = $1'
    let values = [req.body.username]
    pool.query(text, values)
      .then(data => {
        res.status(200).send(data)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })
}

module.exports = {usersController:usersController}