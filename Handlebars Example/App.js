var express     = require('express');
var http        = require('http');
var path        = require('path');
var compression = require('compression');
var app         = module.exports = express();
var cacheTime   = 86400000*7; //a week

//all environments
app.use(compression());
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.engine('html', require('hogan-express'));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname + '/public',{ maxAge: cacheTime }));

//development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

require('./routes/index.js');

http.createServer(app).listen(app.get('port'), function(req,res){
    console.log('Express server listening on port ' + app.get('port'));
});