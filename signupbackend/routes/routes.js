const express = require('express');
const router = express.Router();
const signUpModelCopy = require('../models/SignUpModels');

router.post('/signup', (request, response) => {
  const signedUpUser = new signUpModelCopy({
    firstName: request.body.firstName,
    surName: request.body.surName,
    email: request.body.email,
    password: request.body.password,
  });

  signedUpUser
    .save()
    .then((data) => response.json(data))
    .catch((error) => response.json(error));
});

module.exports = router;
