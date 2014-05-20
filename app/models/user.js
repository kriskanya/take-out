'use strict';

var users = global.nss.db.collection('users');
var _ = require('lodash');

class User{
  constructor(username){
    this.username = username;
    this.order = [];
  }

  orderObjects(ord){
    this.order.push(ord);
  }

  static login(username, fn){
  username = username.trim().toLowerCase();
  users.findOne({username:username}, (e, user)=>{
    if(user){
      user = _.create(User.prototype, user);
      fn(user);
    }else{
      user = new User(username);
      users.save(user, ()=>fn(user));
      }
    });
  }


}

module.exports = User;
