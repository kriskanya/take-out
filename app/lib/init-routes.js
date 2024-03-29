'use strict';

var traceur = require('traceur');
var dbg = traceur.require(__dirname + '/route-debugger.js');
var initialized = false;

module.exports = (req, res, next)=>{
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var home = traceur.require(__dirname + '/../routes/home.js');
  var order = traceur.require(__dirname + '/../routes/order.js');
  var users = traceur.require(__dirname + '/../routes/users.js');

  app.get('/', dbg, home.index);
  app.get('/help', dbg, home.help);
  app.get('/order', dbg, order.index);

  app.post('/login', dbg, users.login);
  app.post('/order', dbg, users.newOrder);
  console.log('Routes Loaded');
  fn();
}
