const express = require('express');
const router = express.Router();
const todoController = require('../controllers/controller/todo.controller');

router.post('/add/:todo', todoController.create);