var photo = require('./photo')
  , SendGrid = require('sendgrid').SendGrid
  , sg = new SendGrid(process.env.SENDGRID_USER, process.env.SENDGRID_PASS)
  , express = require('express')
  , app = express()
  , port = process.env.PORT || 3000;

app.use(express.logger());

app.post('/email', function(req, res) {
  photo(function(err, html) {
    sg.send({
      to: "jane.doe@example.com",
      from: "john.doe@example.com",
      subject: "Hope everyone is enjoying the workshop",
      html: html
    }, function(succ, message) {
      if(succ) {
        res.send("OK");
      } else {
        res.send("ERROR");
      }
      res.end();
    });
  });
});

app.listen(port);
console.log("Server is listening on port " + port);
