const { Router } = require('express');

const router = new Router();

router.get('/', (req, res) => {
    res.render('home.hbs');
});

router.get('/profile', (req, res) => {
    res.render('profile.hbs');
});


module.exports = router;