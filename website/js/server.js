const express = require('express');
const app = express();

const list = require('../js/data');
const bodyParser = require('body-parser');
const { JSDOM } = require('jsdom');
const fs = require('fs');

app.use('/js', express.static('../js'));
app.use('/img', express.static('../img'));
app.use('/css', express.static('../css'));

app.get('/', function (req, res){
  let doc = fs.readFileSync('../html/index.html', 'utf8');
  let dom = new JSDOM(doc);
  let $ = require('jquery')(dom.window);

  res.send(dom.serialize());
});

console.log("in server");
// Getting Data
app.get('/get-character', function (req, res) {
  let formatResponse = req.query['format'];
  let dataList=null;


  if(formatResponse == 'agility-list'){
    res.setHeader("Content-Type", "text/html");
    dataList = list.getQuickAgilityChars();
    res.send(dataList);
    console.log("agility");
  }
  else if(formatResponse == 'power-list'){
    res.setHeader("Content-Type", "text/html");
    dataList = list.getPowerChars();
    res.send(dataList);
  }
  else if(formatResponse == 'control-list'){
    res.setHeader("Content-Type", "text/html");
    dataList = list.getControlChars();
    res.send(dataList);
  }
  else if(formatResponse == 'offence-list'){
    res.setHeader("Content-Type", "application/json");
    dataList = list.getRelentlessOffenseChars();
    res.send(dataList);
  }
  else if(formatResponse == 'recovery-list'){
    res.setHeader("Content-Type", "application/json");
    dataList = list.getRecoveryChars();
    res.send(dataList);
  }
  else if(formatResponse == 'beginner-list'){
    res.setHeader("Content-Type", "application/json");
    dataList = list.getBeginnerFriendlyChars();
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
