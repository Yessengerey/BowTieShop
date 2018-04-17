const express = require('express');
const app = express();

const router = express.Router();

router.route('/')
  .get((request, response) => {
    response.render('index.ejs');
  });

module.exports = router;
