const { Question } = require('../../database/schemas')

const questionsController = {
'post' : ((req, res) => {
  Question.create({
  user_id: req.body.user_id,
  restaurant_id: req.body.restaurant_id,
  text: req.body.text,
  parent_id: req.body.parent_id || null,
  helpful: req.body.helpful || null
})
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
  Question.findAll({
    where: {
      restaurant_id: req.params.id
    }
  })
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.send(err);
    });
}),
'getAnswers' : ((req, res) => {
  Question.find({
    where: {
      parent_id: req.params.id
    }
  })
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
}),
'giveAnswer' : ((req, res) => {
  Question.create({
    user_id: req.body.user_id,
    restaurant_id: req.body.restaurant_id,
    text: req.body.text,
    parent_id: req.body.parent_id || null,
    helpful: req.body.helpful || null
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    res.status(400).json(err)
  })
}),
'put' : ((req, res) => {
  Question.update({
    user_id: req.body.user_id,
    restaurant_id: req.body.restaurant_id,
    text: req.body.text,
    parent_id: req.body.parent_id || null,
    helpful: req.body.helpful || null  
  },
{where: {
  restaurant_id: req.params.id
}}
)
  .then(data => {
    res.status(201).json(data)
  })
  .catch(err => {
    res.status(400).json(err)
  })
}),
'delete': ((req, res) => {
  Question.destroy({
    where: {
      restaurant_id: req.params.id
    }
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    res.status(400).json(err)
  })
})

}

module.exports = {questionsController:questionsController}