const express = require('express');
const router = express.Router();
const catController = require('../controllers/controller/cat.controller');

router.post('/add/:name', catController.create); //add a cat to the array
router.get('/', catController.read); //send cat names to the client
// router.put('/update/:name', catController.update); //update a cat
// router.delete('/delete/:name', catController.delete); //delete a cat

module.exports = router;