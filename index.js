var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
});

app.get('/test', function(request, response) {
    response.send('Hello World Test!')
});

app.get('/test1', function(request, response) {
    response.send('Hello World Test!')
});



app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
