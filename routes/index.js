/*
File Name: index.js
Author: Taisen Colcher
Website http://taisencolcher-advancedwebassignment1.azurewebsites.net/contact / TaisenColcher.com
Sends you to the different pages
 */
 
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Taisen Colcher ' });
});

/* GET about page */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me ' });
});

/* GET contact page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me ' });
});

/* GET services page */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services ' });
});

/* GET projects page */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});


module.exports = router;
