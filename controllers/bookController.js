let controller = {}

let models = require('../models');

let Book = models.Book;

controller.getAll = (query) => {
    let options = {
        attributes: ['id', 'title',]
    };
    // if(query.limit > 0)
    // {
    //     options.limit = query.limit;
    //     options.offset = query.limit * (query.page - 1);
    // }

    return new Promise((resolve, reject) => {
        Book
            .findAndCountAll(options)
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
}

controller.getById = (id) => {
    return new Promise((resolve, reject) => {
        let product;
        Book.findOne({
            where: {id: id},
            include: [{ model: models.BookAuthor}]
        }).then(result => {
            product = result;
            return models.Author.findAll({
                where: {id: product.BookAuthors[0].AuthorId},
                include: [{ model: models.Author}]
            })
        })
        .then(author => {
            product.author = author;
            resolve(product);
        })
        .catch(error => reject(new Error(error)));
    });
}

module.exports = controller;