const express = require('express');
const router = express.Router();
const signUpModelCopy = require('../models/SignUpModels');

router.post('/signup', (request, response) => {
  const { firstName, surName, email, password } = request.body;

  const signedUpUser = new signUpModelCopy({
    firstName,
    surName,
    email,
    password,
  });

  signedUpUser
    .save()
    .then((data) => response.json(data))
    .catch((error) => response.json(error));
});

module.exports = router;
