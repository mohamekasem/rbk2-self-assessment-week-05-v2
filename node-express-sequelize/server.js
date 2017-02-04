var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });

var router = express.Router();

var User = sequelize.define('User', {
  username: Sequelize.STRING
});

/*  Create a '/users' route that responds to 
    a GET request with all users in the database */
//if the Qu need to mack reuter this is
router.get(function (req,res,next){
	
	//resev the git req from 'user'
	//.send to sequli
	req.send(req.user)
})
// app.param('User', function(req, res, next) {

//   // try to get the User details from the User model and attach it to the request object
//   User.find(function(err, User) {
//     if (err) {
//       next(err);
//     } else if (User) {
//       req.User = User;
//       next();
//     } else {
//       next(new Error('failed to load User'));
//     }
//   });
// })

// router.use(function(req,res,next){

// })

module.exports = { 
  app: app,
  User: User
};
