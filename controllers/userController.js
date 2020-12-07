const User = require('../models/userModel');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
exports.user_create = function (req, res) {
    let user = new User(
        {
            name: req.body.name,
            address: req.body.address
        }
    )

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(user)
    })
}



exports.user_get = function (req, res) {
    User.findById(req.params.id, function (err, product) {
        if (err) {
            return (err);
        }
        res.send(product);
    })
};

exports.user_update = function (req, res) {
    User.findOneAndUpdate(req.params.id, { $set: req.body },
        function (err, user) {
            if (err) {
                return (err);
            }
            res.send("User updated Suceessfully!");
            // res.send('req parameter id: ' + req.body.address)
        })
};

exports.user_delete = function (req, res) {
    // res.send("Parameter Id: " + req.params.id)
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return (err)
        }
        res.send('User deleted successfully!')
    })
}



