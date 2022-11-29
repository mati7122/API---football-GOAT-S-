const { Router } = require('express');
const { GetUsers, GetOneUser, AddUser, UploadFile, UpdateUser, DeleteUser } = require('../controllers/crud.methods.js');

const router = new Router();

router.get('/get-users', GetUsers);

router.get('/get-user/:id', GetOneUser);

router.post('/add-user', AddUser);

router.post('/upload-file', UploadFile);

router.put('/update-user/:id', UpdateUser);

router.delete('/delete-user/:id', DeleteUser);


module.exports = router;