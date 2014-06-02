var express = require('express'),
    app = express()
    lorem = require('lorem-ipsum')
    NB_OF_SPRINTS = 100,
    NB_OF_STORIES = 1000;

function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
}

app.get('/api/plan.json', function(req, res) {
    var lorem_settings = {count: 3, units: 'words'}
        , plan = [];

    for (var i = 0 ; i < NB_OF_SPRINTS ; i++) {
        plan.push({title: lorem(lorem_settings)});
    }
    res.send(plan);
});

app.get('/api/backlog.json', function(req, res) {
    var lorem_settings = {count: 1, units: 'sentences'}
        , backlog = [];

    for (var i = 0 ; i < NB_OF_STORIES ; i++) {
        backlog.push({
            xref: 'story #'+ i,
            points: getRandomArbitrary(1, 21),
            color: 'blue',
            title: lorem(lorem_settings)
        });
    }
    res.send(backlog);
});

app.use(express.static('./public'));

var port = process.env.PORT || 8000;

app.listen(port);

console.log('Running server on port '+ port);
