let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
	let css = "./public/index-styles.css";
	let bookController = require("../controllers/bookController");
	bookController.getAll().then(data => {
		res.locals.books = data.rows;
		
		let categoryController = require("../controllers/categoryController");
		return categoryController.getAll();
	}).then(data => {
		res.locals.categories = data.rows;
		res.render('index', {css: css});
		console.log(res.locals.books);
	})
	.catch(error => {
		next(error);
	});
});
 
module.exports = router;