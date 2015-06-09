var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mcapi = require('mailchimp-api/mailchimp');
var mc = new mcapi.Mailchimp("9ed0f65ebf0fd9f8ea833df450c744ab-us11");

app.use(bodyParser.urlencoded({extended:true}));

app.use("/", express.static(__dirname));

app.post('/subscribe', function(req, res) {
  var investorListId = "91807d0f38";
  var borrowerListId = "c5764a3674";
  var type = req.query.type;
  var listId;

  if (type == "investor") {
    list = investorListId;
  }
  else if (type == "borrower") {
    list = borrowerListId;
  }
  
  console.log("type:", type);
  console.log("body", req.body);

  // mc.lists.subscribe({id:borrowerListId, email:{email:req.body.email}}, function(result) {
  //   console.log("success: ", result);
  // },
  // function(error) {
  //   console.log('error:', error);
  // });

  res.send('subscribed');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Mailchimp subscriber app listening at http://%s:%s', host, port);

});
