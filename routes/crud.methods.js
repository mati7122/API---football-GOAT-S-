const { Router } = require('express');
const { GetUsers, GetOneUser, AddUser, UpdateUser, DeleteUser } = require('../controllers/crud.methods.js');

const router = new Router();

router.get('/get-users', GetUsers);

router.get('/get-user/:id', GetOneUser);

router.post('/add-user', AddUser);

router.put('/update-user/:id', UpdateUser);

router.delete('/delete-user/:id', DeleteUser);


module.exports = router;