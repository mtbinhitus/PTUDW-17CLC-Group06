let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    let css = "./public/index-styles.css";
    let bookController = require("../controllers/bookController");
		bookController
		.getAll()
		.then(data => {
		res.locals.books = data.rows;
		res.render('index', {css: css});
		
	})
	.catch(error => next(error));
   
 });

module.exports = router;