const express = require('express');
const router = express.Router();
const catController = require('../controllers/controller/cat.controller');

router.get('/', catController.read); //send cat names to the client
router.post('/add/:name', catController.create); //add a cat to the array
router.put('/change/:name', catController.update); //update a cat

module.exports = router;