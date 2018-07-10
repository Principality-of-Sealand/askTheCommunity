const {pool} = require('../../database/schemas');
const questionsController = {
'post' : ((req, res) => {
  const text = 'INSERT INTO questions(user_id, restaurant_id, text, parent_id, helpful, "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, $5, $6, $7)'
  let values = [req.body.user_id, req.body.restaurant_id, req.body.text, req.body.parent_id || null, req.body.helpful || null, 'now', 'now']
  pool.query(text, values)
.then(data => {
  res.status(201).send(data);
})
.catch(err => {
  res.status(400).send(err);
})
}),
'get' : ((req, res) => {
  const text = 'SELECT * FROM questions where restaurant_id = $1 and parent_id is null'
  let values = [req.params.id]
  pool.query(text, values)
    .then(data => {
      res.status(200).send(data.rows);
    })
    .catch(err => {
      res.status(400).send(err);
    });
}),
'getAnswers' : ((req, res) => {
  const text = 'SELECT * FROM questions where parent_id = $1'
  let values = [req.params.id]
  pool.query(text, values)
    .then(data => {
      res.status(200).send(data.rows);
    })
    .catch(err => {
      res.status(400).send(err);
    });
}),
'giveAnswer' : ((req, res) => {
  const text = 'INSERT INTO questions(user_id, restaurant_id, text, parent_id, helpful, "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, $5, $6, $7)'
  let values = [req.body.user_id, req.body.restaurant_id, req.body.text, req.body.parent_id || null, req.body.helpful || null, 'now', 'now']
  poo.query(text, values)
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
    res.status(400).send(err)
  })
}),
'deleteAnswer' : ((req, res) => {
  const text = 'DELETE FROM questions WHERE parent_id = $1'
  let values = [req.params.id]
  pool.query(text, values)
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
    res.status(400).send(err)
  })
}),
'put' : ((req, res) => {
const text = 'UPDATE questions SET (user_id, text, parent_id, helpful, "createdAt", "updatedAt") = ($1, $2, $3, $4, $5, $6, ) WHERE restaurant_id = ($7)'
let values = [req.body.user_id, req.body.text, req.body.parent_id || null, req.body.helpful || null, 'now', 'now', req.body.restaurant_id]
pool.query(text, values)
  .then(data => {
    res.status(201).send(data)
  })
  .catch(err => {
    res.status(400).send(err)
  })
}),
'changeAnswer' : ((req, res) => {
  const text = 'UPDATE questions SET (user_id, restaurant_id, text, parent_id, helpful, "createdAt", "updatedAt") = ($1, $2, $3, $4, $5, $6, $7) WHERE parent_id = ($4)'
  let values = [req.body.user_id, req.body.restaurant_id, req.body.text, req.body.parent_id, req.body.helpful || null, 'now', 'now']
  pool.query(text, values)
    .then(data => {
      res.status(201).send(data)
    })
    .catch(err => {
      res.status(400).send(err)
    })
  }),
'delete': ((req, res) => {
  const text = 'DELETE FROM questions WHERE restaurant_id = $1'
  let values = [req.params.id]
  pool.query(text, values)
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
    res.status(400).send(err)
  })
})

}

module.exports = {questionsController:questionsController}