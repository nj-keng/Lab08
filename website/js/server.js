const express = require('express');
const app = express();

const list = require('../js/data');
const bodyParser = require('body-parser');
const { JSDOM } = require('jsdom');
const fs = require('fs');

app.use('/js', express.static('../js'));
app.use('/img', express.static('../img'));
app.use('/css', sxpress.static('../css'));

app.get('/', function (req, res){
  let doc = fs.readFileSync('../html/index.html', 'utf8');
  let dom = new JSDOM(doc);
  let $ = require('jquery')(dom.window);

  res.send(dom.serialize());
});

// Getting Data
app.get('/ajax-get-content', function (req, res) {
  let formatResponse = req.query['format'];
  let dataList=null;

  if(formatResponse == 'html-list'){
    res.setHeader("Conten-Type", "text/html");
    // make a getHTML function in data.js
    dataList = list.getHTML();
    res.send(dataList);
  }
  else if(formantResponse == 'json-list'){
    res.setHeader("Content-Type", "application/json");
    // make a getJSON function in data.js
    dataList = list.getJSON();
    res.send(dataList);
  }
  else{
    res.send({msg: "Wrong Format"});
  }
});

// #############################################################
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// #############################################################

// 404 Page Not Found
app.use(function (req, res, next) {
  res.status(404).send("Nothing there, 404.");
})

// Localhost Ready
let port = 8000;
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
})
