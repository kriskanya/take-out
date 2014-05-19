/* jshint unused:false */

(function(){
  'use strict';

  $(document).ready(initialize);

  var socket;

  function initialize(){
    $('#login').click(login);
  }

  function login(){
    var username = $('#username').val();
    ajax('/login', 'post', {username:username}, h=>{
      $('#username').val('');
      $('#dashboard').empty().append(h);
    });
  }

function ajax(url, type, data={}, success=r=>console.log(r), dataType='html'){
  $.ajax({url:url, type:type, dataType:dataType, data:data, success:success});
}

})();
