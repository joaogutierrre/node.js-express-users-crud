const express = require('express')
const uuid = require('uuid')
const router = express.Router()
let users = require('../../Users')

//get all users
router.get('/', (req, res) => {
  res.json(users)
})

module.exports = router
