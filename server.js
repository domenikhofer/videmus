const express = require('express');
const app = express();
const path = require('path');


// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));


// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});



// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 1993, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

