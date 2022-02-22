var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('home.ejs', { title: 'Home' });
});

/* GET About me page. */
router.get('/about', function(req, res, next) {
    res.render('about.ejs', { title: 'About' });
});

/* GET services page. */
router.get('/Services', function(req, res, next) {
    res.render('services', { title: 'Services' });
});

/* GET project page. */
router.get('/Projects', function(req, res, next) {
    res.render('projects', { title: 'Projects' });
});


/* GET contact me page. */
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});


module.exports = router;