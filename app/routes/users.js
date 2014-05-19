'use strict';

var traceur = require('traceur');
var users = global.nss.db.collection('users');
var User = traceur.require(__dirname + '/../models/user.js');

exports.login = (req, res)=>{
  User.login(req.body.username, user=>res.render('users/dashboard', {user:user}));
};

exports.create = (req, res)=>{
  console.log('xxxxxx');
  console.log(req.body);
  users.save(req.body, ()=>res.redirect('/order'));
};
