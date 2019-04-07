const express = require('express')
const dataRouter = express.Router()
const json = require('../json/data_api.json')

dataRouter.route('/data').get(function (req, res) {
  res.json(json)
})

dataRouter.route('/data/:id').get(function (req, res) {
  var id = req.params.id
  res.json(json[id])
})

module.exports = dataRouter
