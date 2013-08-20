var express = require('express'),
app = express(),
cons = require('consolidate');

app.engine('html', cons.swig);
app.set('view engine', 'hmtl');
app.set('views', __dirname + '/public_html');
app.use(express.bodyParser());
app.use(app.router);

//Handler for internal server errors
function errorHandler(err, req, res, next){
    
}
