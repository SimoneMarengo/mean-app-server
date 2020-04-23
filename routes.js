// load the todo model
var Todo = require('./models/todo');

// expose the routes to our app with module.exports
module.exports = function (app) {

    app.post('/ping', function (req, res) {
        res.send(req.body)
    });

    app.post('/users/login', function (req, res) {
        res.send(req.body);
    });

    app.post('/users/registration', function (req, res) {
        res.send(req.body);
    });
};