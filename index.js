var express = require('express');
var app = express();
var path = require('path');


app.set('port', process.env.PORT || 5000);

// views is directory for all template files
app.use(express.static(__dirname));
//app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});