var express = require('express'),
    app = express();

app.use(express.static('./public'));

var port = process.env.PORT || 8000;

app.listen(port);

console.log('Running server on port '+ port);
