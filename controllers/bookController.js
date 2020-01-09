let controller = {};

let models = require("../models");
let Sequelize = require("sequelize");
const Op = Sequelize.Op;
let Book = models.Book;

controller.getAll = query => {
  let options = {
    where: {}
  };
  if(query) {
    if (query.limit > 0) {
        options.limit = query.limit;
        options.offset = query.limit * (query.page - 1);
      }
    
      if (query.sort) {
        switch (query.sort) {
          case "title":
            options.sort = [["title", "ASC"]];
            break;
          default:
            options.sort = [["title", "ASC"]];
            break;
        }
      }
    
      if (query.keyword != '' && query) {
        options.where.title = {
          [Op.iLike]: `%${query.keyword}%`
        };
      }
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

controller.getCategoriseById = id => {
    return new Promise((resolve, reject) => {
      let product;
      Book.findOne({
        where: { id: id },
        include: [{ model: models.BookCategory }]
      })
        .then(result => {
          product = result;
          return models.Category.findAll({
            where: { id: product.BookCategorys[0].AuthorId }
          });
        })
        .then(category => {
          product.category = category;
          resolve(category);
        })
        .catch(error => reject(new Error(error)));
    });
  };

module.exports = controller;