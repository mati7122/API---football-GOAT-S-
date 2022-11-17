
const express = require('express');
const { Router } = require('express');
const app = express();
const dotenv = require('dotenv').config();
const hbs = require('hbs');

const PORT = process.env.PORT;
const router = new Router();

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home.hbs')
})

app.get('/profile', (req, res) => {
    res.render('profile.hbs')
})

router.get('/get-users', (req, res) => {
    res.json({
        status: 'success!',
        method: 'get - users'
    })
})

app.use('/api', router)

app.listen(PORT, () => {
    console.log('Running in port ', PORT)
})