/*
 * GET home page.
 */


exports.index = function(req, res){
  var http = require('http');

  http.get('http://gifapi.co/gifs.json', function (res2) {
    res2.on('data', function(d) {
      var parsed = JSON.parse(d);
      console.log(req.params.tag)
      res.json(parsed);
    });
  });
};