'use strict';

var traceur = require('traceur');
var users = global.nss.db.collection('users');
// var orders = global.nss.db.collection('orders');
// var Mongo = require('mongodb');
var User = traceur.require(__dirname + '/../models/user.js');
// var _ = require('lodash');

exports.login = (req, res)=>{
  User.login(req.body.username, user=>res.render('users/dashboard', {user:user}));
};

exports.newOrder = (req, res)=>{


  users.save(req.body, ()=>res.redirect('/order'));


  // var userData = users.type;
  // console.log('xxxx');
  // console.log(userData);
  // var breakfast = 'Breakfast';
  // var us = users.find({type: breakfast}).toArray((err, records)=>{
  //   return records;
  // });
  // console.log('xxxxx');
  // console.log(us);

};
