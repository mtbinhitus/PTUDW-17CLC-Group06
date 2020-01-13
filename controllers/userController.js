let controller = {};
let models = require('../models');
let User = models.User;
let Register = models.Register;
let bcrypt = require('bcryptjs')

controller.getUserByEmail = (email) => {
    return User.findOne({
        where: { email: email }
    });
};

controller.createUser = (user) => {
    return User.create(user);
}

controller.createRegisterUser = (user) => {
    //var salt = bcrypt.genSaltSync(10);
    //user.pass = bcrypt.hashSync(user.pass, salt);
    return Register.create(user);
}

module.exports = controller;