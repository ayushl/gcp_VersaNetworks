var express = require('express');
var app = express();
const apiCallFromNode = require('./NodeJsCall')


// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.set('views', './src/views')

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
 
  var tagline = "Versa Networks GCP Malware Sandboxing Project";

  res.render('pages/index', {
    tagline: tagline
  });
});



// about page
// app.get('/api2', function(req, res) {
//   res.render('pages/api2');
// });
app.get('/fss', function(req, res) {
  apiCallFromNode.callApi(function(response){
    fssData = response
    res.render('pages/fssData',{fssData : fssData , selected : "active"});
  
});
});
app.get('/clientList', function(req, res) {
  apiCallFromNode.callApiClient(function(response){
    clientData = response
    res.render('pages/clientConnection',{clientData : clientData , selected : "active"});
  
});
});
app.get('/activeFlies', function(req, res) {
  apiCallFromNode.callApiActive(function(response){
    activeFileData = response
    res.render('pages/activeFiles',{activeFileData : activeFileData , selected : "active"});
  
});
});
app.get('/rns', function(req, res) {
  apiCallFromNode.callApiRns(function(response){
    rnsData = response
    res.render('pages/rnsData',{rnsData : rnsData , selected : "active"});
  
});
});
app.get('/statistics', function(req, res) {
  apiCallFromNode.callApiStatistics(function(response){
    versaAuthData = response
    res.render('pages/v1Statistics',{versaAuthData : versaAuthData});
  
});
});

app.get('/frs-statistics', function(req, res) {
  apiCallFromNode.callApiFrsStatistics(function(response){
    versaFrsData = response
    res.render('pages/frsStats',{versaFrsData : versaFrsData});
  
});
});

app.listen(8080);
console.log('Server is listening on port 8080');