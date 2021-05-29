const express = require('express');
const router = express.Router();
const signUpModelCopy = require('../models/SignUpModels');

router.post('/signup', (request, response) => {
  const { firstName, lastName, email, password } = request.body;

  const signedUpUser = new signUpModelCopy({
    firstName,
    lastName,
    email,
    password,
  });

  signedUpUser.save().then(response.json).catch(response.json);
});

module.exports = router;
