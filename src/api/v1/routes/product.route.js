const express = require('express');
const { verifyToken } = require('../middlewares/verify_token.middleware');

const router = express.Router();

router.get('/getLists', verifyToken, (req, res) => {
  console.log('req header', req.header);

  res.json({
    listEmail: [
      { email: '123' },
      { email: '234' }
    ]
  })
})

router.get('/detail/:id', verifyToken, (req, res) => {

})

module.exports = router;