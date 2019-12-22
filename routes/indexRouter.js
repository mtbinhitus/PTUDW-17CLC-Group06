let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    let bookController = require('../controllers/bookController');
    bookController.getAll().then( data => {
        res.locals.books = data;
        res.render('index');
    }
    )
});