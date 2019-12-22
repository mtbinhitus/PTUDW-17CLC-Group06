let controller = {}

let models = require('../models');

let Category = models.Category;

controller.getAll = (query) => {
    let options = {
        attributes: ['id', 'name', 'image',]
    };
    // if(query.limit > 0)
    // {
    //     options.limit = query.limit;
    //     options.offset = query.limit * (query.page - 1);
    // }

    return new Promise((resolve, reject) => {
        Category
            .findAndCountAll(options)
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
}

module.exports = controller;