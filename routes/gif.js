
/*
 * Show all gifs.
 */

exports.list = function(req, res){
  var http = require('http');
  http.get('http://gifapi.co/gifs.json', function (res2) {
    res2.on('data', function(d) {
      var parsed = JSON.parse(d);
      console.log(req.params.tag)
      res.json(parsed);
    });
  });
};

exports.tag = function(req, res){
  res.send(req.params.tag)
};