
/*
 * Show all gifs.
 */

exports.list = function(req, res){
  var http = require('http');
  http.get('http://localhost:8000/gifs.json', function (res2) {
    res2.on('data', function(d) {
      var parsed = JSON.parse(d);
      console.log(req.params.tag)
      res.json(parsed);
    });
  });
};

exports.width = function(req, res){
  var http = require('http');
  http.get('http://localhost:8000/gifs.json', function (res2) {
    res2.on('data', function(d) {
      var parsed = JSON.parse(d);
      console.log(req.params.width);
      res.json(" width: " + req.params.width);
    })
  });
};

exports.height = function(req, res){
  var http = require('http');
  http.get('http://localhost:8000/gifs.json', function (res2) {
    res2.on('data', function(d) {
      var parsed = JSON.parse(d);
      console.log(req.params.height);
      res.json(req.params.height);
    })
  });
};

exports.widthHeight = function(req, res){
  var http = require('http');
  http.get('http://localhost:8000/gifs.json', function (res2) {
    res2.on('data', function(d) {
      var parsed = JSON.parse(d);
      console.log(req.params.height + " width: " + req.params.width);
      res.json(req.params.height + " width: " + req.params.width);
    })
  });
};

exports.tag = function(req, res){
  var http = require('http');
  http.get('http://localhost:8000/gifs.json', function (res2) {
    res2.on('data', function(d) {
      var parsed = JSON.parse(d);
      res.json(req.params.tag);
    })
  });
};

exports.search = function(req, res){
  var http = require('http');
  http.get('http://localhost:8000/gifs.json', function (res2) {
    res2.on('data', function(d) {
      var parsed = JSON.parse(d);
      console.log(req.params.height + " width: " + req.params.width);
      res.json(req.params.height + " width: " + req.params.width);
    })
  });
};
