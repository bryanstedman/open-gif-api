var db = 'http://localhost:8000/gifs.json';
// var db = 'http://gifapi.co/gifs.json';

exports.list = function(req, res){
  var http = require('http');
  http.get(db, function (res2) {
    res2.on('data', function(d) {
      var parsed = JSON.parse(d);
      console.log(req.params.tag)
      res.json(parsed);
    });
  });
};

exports.width = function(req, res){
  var http = require('http');
  http.get(db, function (res2) {
    res2.on('data', function(d) {
      var parsed = JSON.parse(d);
      var response = [];
      for (i=0; i<parsed.length; i++) {
        if (parsed[i].width == req.params.width) {
          response.push(parsed[i]);
        }
      }
      if (response == '') {
        response = "Oh no! We don't have any gif that wide"; 
      }
      res.json(response);
    })
  });
};

exports.height = function(req, res){
  var http = require('http');
  http.get(db, function (res2) {
    res2.on('data', function(d) {
      var parsed = JSON.parse(d);
      var response = [];
      for (i=0; i<parsed.length; i++) {
        if (parsed[i].height == req.params.height) {
          response.push(parsed[i]);
        }
      }
      if (response == '') {
        response = "Oh no! We don't have any gif that tall"; 
      }
      res.json(response);
    })
  });
};

exports.widthHeight = function(req, res){
  var http = require('http');
  http.get(db, function (res2) {
    res2.on('data', function(d) {
      var parsed = JSON.parse(d);
      var response = [];
      for (i=0; i<parsed.length; i++) {
        if (parsed[i].width == req.params.width && parsed[i].height == req.params.height) {
          response.push(parsed[i]);
        }
      }
      if (response == '') {
        response = "Oh no! We don't have any gif that size";
      } 
      res.json(response);
    })
  });
};

exports.weight = function(req, res){
  var http = require('http');
  http.get(db, function (res2) {
    res2.on('data', function(d) {
      var parsed = JSON.parse(d);
      var response = [];
      for (i=0; i<parsed.length; i++) {
        if (parsed[i].weight == req.params.weight) {
          response.push(parsed[i]);
        }
      }
      // if (response == '') {
      //   response = "Oh no! We don't have any gif that tall"; 
      // }
      res.json(response);
    })
  });
};


exports.tag = function(req, res){
  var http = require('http');
  http.get(db, function (res2) {
    res2.on('data', function(d) {
      var parsed = JSON.parse(d);
      var response = [];
      for(i=0; i<parsed.length; i++) {
        for(j=0; j<parsed[i].tags.length; j++) {
          if (parsed[i].tags[j] == req.params.tag) {
            response.push(parsed[i]);
          }
        }
      }
      if(response == ''){
        response = 'Oh no! We do not have any gifs tagged ' + req.params.tag;
      };
      res.json(response);
    })
  });
};

exports.latest = function(req, res) {
  var http = require('http');
  http.get(db, function(res2) {
    res2.on('data', function(d) {
      var parsed = JSON.parse(d);
      response = [];
      response .push(parsed[parsed.length - 1]);
      res.json(response);
    });
  })
};

exports.search = function(req, res){
  var http = require('http');
  http.get(db, function (res2) {
    res2.on('data', function(d) {
      var parsed = JSON.parse(d);
      console.log(req.params.height + " width: " + req.params.width);
      res.json(req.params.height + " width: " + req.params.width);
    })
  });
};
