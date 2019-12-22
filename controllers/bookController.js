let controller = {};

let models = require("../models");
let Sequelize = require("sequelize");
const Op = Sequelize.Op;
let Book = models.Book;

controller.getAll = query => {
  let options = {
    where: {}
  };
  if (query.limit > 0) {
    options.limit = query.limit;
    options.offset = query.limit * (query.page - 1);
  }

  if (query.sort) {
    switch (query.sort) {
      case "name":
        options.sort = [["name", "ASC"]];
        break;
      case "category":
        options.sort = [["category", "ASC"]];
        break;
      case "author":
        options.sort = [["author", "ASC"]];
        break;
      default:
        options.sort = [["name", "ASC"]];
        break;
    }
  }

  if (query.search) {
    options.where.bookName = {
      [Op.iLike]: `%${query.search}%`
    };
  }

  return new Promise((resolve, reject) => {
    Book.findAndCountAll(options)
      .then(data => resolve(data))
      .catch(error => reject(new Error(error)));
  });
};

controller.getById = id => {
  return new Promise((resolve, reject) => {
    let product;
    Book.findOne({
      where: { id: id },
      include: [{ model: models.BookAuthor }]
    })
      .then(result => {
        product = result;
        return models.Author.findAll({
          where: { id: product.BookAuthors[0].AuthorId }
        });
      })
      .then(author => {
        product.author = author;
        resolve(product);
      })
      .catch(error => reject(new Error(error)));
  });
};

controller.getAuthorId = id => {
  return new Promise((resolve, reject) => {
    let product;
    Book.findOne({
      where: { id: id },
      include: [{ model: models.BookAuthor }]
    })
      .then(result => {
        product = result;
        return models.Author.findAll({
          where: { id: product.BookAuthors[0].AuthorId }
        });
      })
      .then(author => {
        product.author = author;
        resolve(author);
      })
      .catch(error => reject(new Error(error)));
  });
};

module.exports = controller;
