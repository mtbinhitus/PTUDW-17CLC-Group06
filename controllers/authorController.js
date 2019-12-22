let controller = {}

let models = require('../models');
let Sequelize = require("sequelize");
const Op = Sequelize.Op;
let Author = models.Author;

controller.getAll = (query) => {
    let options = {
        attributes: ['id', 'name',]
    };
    // if(query.limit > 0)
    // {
    //     options.limit = query.limit;
    //     options.offset = query.limit * (query.page - 1);
    // }

    return new Promise((resolve, reject) => {
        Author
            .findAndCountAll(options)
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
}

controller.getById = (id) => {
    return new Promise((resolve, reject) => {
        Author.findOne({
            where: {id: id},
        }).then(data => resolve(data) )
        .catch(error => reject(new Error(error)));
    });
}

module.exports = controller;