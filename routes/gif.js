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

exports.test = function(req, res) {
  var response = req.query;
  res.send(response);
}

exports.search = function(req, res){
  var http = require('http');
  http.get(db, function (res2) {
    res2.on('data', function(d) {
      var parsed = JSON.parse(d);
      response = [];

      if (!req.query.tag && !req.query.width && !req.query.height && !req.query.weight) {
        response = 'Please enter some valid queries - tag, width, height or weight';
      } else if (req.query.tag) {
        for (i=0; i<parsed.length; i++) {
          for (j=0; j<parsed[i].tags.length; j++) {
            if ((parsed[i].tags[j] == req.query.tag)
              && (req.query.width == null || req.query.width == '' || req.query.width == parsed[i].width)
              && (req.query.height == null || req.query.height == '' || req.query.height == parsed[i].height)
              && (req.query.weight == null || req.query.weight == '' || req.query.weight == parsed[i].weight)) {
              response.push(parsed[i]);
            }
          }
        }
      } else {
        for (i=0; i<parsed.length; i++) {
          if ((req.query.width == null || req.query.width == '' || req.query.width == parsed[i].width)
              && (req.query.height == null || req.query.height == '' || req.query.height == parsed[i].height)
              && (req.query.weight == null || req.query.weight == '' || req.query.weight == parsed[i].weight)) {
            response.push(parsed[i]);
          }
        }
      }
      res.json(response);
    })
  });
};

exports.random = function(req, res) {
  var http = require('http');
  http.get(db, function(res2) {
    res2.on('data', function(d) {
      var parsed = JSON.parse(d);
      index = Math.floor(Math.random()*parsed.length)
      response = parsed[index];
      res.json(response);
    });
  })
}


