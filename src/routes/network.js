const express = require('express')
const router = express.Router()
const os = require('os')

/* GET users listing. */
router.get('/interfaces', function (req, res, next) {
  res.send(os.networkInterfaces())
})

module.exports = router
