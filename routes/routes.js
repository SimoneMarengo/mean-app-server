const crypto = require('../utils/crypto.js');
// expose the routes to our app with module.exports
module.exports = function (app) {

    app.post('/ping', function (req, res) {
        res.send(req.body)
    });

    app.post('/users/login', function (req, res) {
        res.send(req.body);
    });

    app.post('/users/registration', function (req, res) {
        res.send({
            passowrd: crypto.encrypt(req.body.password),
            ...req.body
        });
    });
};