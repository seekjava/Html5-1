var express = require('express');
var router = express.Router();
var users = require('../mock/user.json');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('users/index', {
    title: 'Users',
    users: users
  });
});

/* Get form to add a new user*/
router.get('/new', function(req, res) {
  res.render('users/new', {
    title: 'New User'
  });
});

/* Get detail of a new user */
router.get('/:name', function(req, res, next) {
  var user = users[req.params.name]
  if (user) {
    res.render('users/profile', {
      title: 'User Profile',
      user: user
    });
  } else {
    next();
  }
});

/* post the form to add new user */
router.post('/addUser', function(req, res, next) {
  if (users[req.body.name]) {
    res.send('Conflict', 409);
  } else {
    users[req.body.name] = req.body;
    res.redirect('/users/');
  }
});

module.exports = router;
