/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , gif = require('./routes/gif')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/all', gif.list);
app.get('/tag/:tag', gif.tag);
app.get('/width/:width', gif.width);
app.get('/height/:height', gif.height);
app.get('/:width/:height', gif.widthHeight);
app.get('/weight/:weight', gif.weight);
app.get('/latest', gif.latest);
// app.get('/search/?height=:height&width=:width&tag=:tag', gif.search); 
// app.get('/:tag', routes.index);
// app.get('/tag/:tag/:width', routes.index);
// app.get('/width/:width', routes.index);
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});