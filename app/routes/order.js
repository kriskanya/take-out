'use strict';

var orders = global.nss.db.collection('orders');

exports.index = (req, res)=>{
  orders.find().toArray((err,o)=>{
    res.render('order/index', {orders: o, title: 'Order Home'});
  });
};
