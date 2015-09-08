var hooks = require('hooks');
var before = hooks.before;
var after = hooks.after;

var responseStash = {};

hooks.afterEach(function (transaction, done) {
  if(transaction.request.method == "POST")
  {
    var resource = transaction.request.uri.match(/([a-z]+)/);
    var id = JSON.parse(transaction.real.body)['id'];
    responseStash[resource[0]] = {}
    responseStash[resource[0]]['id'] = id;
  }
  done();
});

hooks.beforeEach(function (transaction, done) {
  if(transaction.request.method != "POST")
  {
    var resource = transaction.request.uri.match(/([a-z]+)/);
    var resourceId = responseStash[resource[0]]['id'];
    var url = transaction.fullPath;
    transaction.fullPath = url.replace('42', resourceId);
  }
  done();
});