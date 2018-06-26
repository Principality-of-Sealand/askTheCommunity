const { Question } = require('../../database/schemas')
const {pool} = require('../../database/schemas');
const questionsController = {
'post' : ((req, res) => {
  pool.query('INSERT INTO questions(user_id, restaurant_id, text, parent_id, helpful, "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, $5, $6, $7)',
  [req.body.user_id, req.body.restaurant_id, req.body.text, req.body.parent_id || null, req.body.helpful || null, 'now', 'now']
)
.then(data => {
  console.log('Succesfully inserted data into the database...', data);
  res.status(201).send(data);
})
.catch(err => {
  console.log('Error inserting data into the database', err);
  res.status(400).send(err);
})
}),
'get' : ((req, res) => {
  pool.query('(SELECT * FROM questions where restaurant_id = $1)', [req.params.id])
    .then(data => {
      res.status(200).send(data.rows);
    })
    .catch(err => {
      res.status(400).send(err);
    });
}),
'getAnswers' : ((req, res) => {
  // Question.find({
  //   where: {
  //     parent_id: req.params.id
  //   }
  // })
  pool.query('SELECT * FROM questions where parent_id = $1', [req.params.id])
    .then(data => {
      res.status(200).send(data.rows);
    })
    .catch(err => {
      res.status(400).send(err);
    });
}),
'giveAnswer' : ((req, res) => {
  // Question.create({
  //   user_id: req.body.user_id,
  //   restaurant_id: req.body.restaurant_id,
  //   text: req.body.text,
  //   parent_id: req.body.parent_id || null,
  //   helpful: req.body.helpful || null
  // })
  pool.query('INSERT INTO questions(user_id, restaurant_id, text, parent_id, helpful, "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, $5, $6, $7)',
  [req.body.user_id, req.body.restaurant_id, req.body.text, req.body.parent_id || null, req.body.helpful || null, 'now', 'now']
)
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    res.status(400).json(err)
  })
}),
'put' : ((req, res) => {
//   Question.update({
//     user_id: req.body.user_id,
//     restaurant_id: req.body.restaurant_id,
//     text: req.body.text,
//     parent_id: req.body.parent_id || null,
//     helpful: req.body.helpful || null  
//   },
// {where: {
//   restaurant_id: req.params.id
// }}
// )
pool.query('UPDATE questions SET (user_id, restaurant_id, text, parent_id, helpful, "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, $5, $6, $7) WHERE restaurant_id = ($8)',
[req.body.user_id, req.body.restaurant_id, req.body.text, req.body.parent_id || null, req.body.helpful || null, 'now', 'now', req.params.id])
  .then(data => {
    res.status(201).json(data)
  })
  .catch(err => {
    res.status(400).json(err)
  })
}),
'delete': ((req, res) => {
  // Question.destroy({
  //   where: {
  //     restaurant_id: req.params.id
  //   }
  // })
  pool.query('DELETE FROM questions WHERE restaurant_id =$1', req.params.id)
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    res.status(400).json(err)
  })
})

}

module.exports = {questionsController:questionsController}