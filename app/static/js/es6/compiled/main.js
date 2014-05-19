(function() {
  'use strict';
  $(document).ready(initialize);
  var socket;
  function initialize() {
    $('#login').click(login);
  }
  function login() {
    var username = $('#username').val();
    ajax('/login', 'post', {username: username}, (function(h) {
      $('#username').val('');
      $('#dashboard').empty().append(h);
    }));
  }
  function ajax(url, type) {
    var data = arguments[2] !== (void 0) ? arguments[2] : {};
    var success = arguments[3] !== (void 0) ? arguments[3] : (function(r) {
      return console.log(r);
    });
    var dataType = arguments[4] !== (void 0) ? arguments[4] : 'html';
    $.ajax({
      url: url,
      type: type,
      dataType: dataType,
      data: data,
      success: success
    });
  }
})();

//# sourceMappingURL=main.map
