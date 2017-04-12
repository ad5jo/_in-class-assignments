var app = require('../app.js');

app.get('/Contact', function(req, res) {
    res.render('contact.html', { /*object*/ });
});

//continue routes here