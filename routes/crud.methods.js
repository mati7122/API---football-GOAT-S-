const { Router } = require('express');
const { getUsers, addUser } = require('../controllers/crud.methods.js');

const router = new Router();

router.get('/get-users', getUsers);

router.post('/add-user', addUser);

module.exports = router;