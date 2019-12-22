console.log("Hello World!!!");
var express = require('express');
var app = express();

// Setup static path use css and image
app.use(express.static(__dirname));

// Setup handlebars
// Use View Engine
var expressHbs = require('express-handlebars');
var paginateHelper = require('express-handlebars-paginate');
var hbs = expressHbs.create({
	extname			: 'hbs',
	defaultLayout	: 'layout', 
	layoutsDir		: __dirname + '/views/layouts/',
	partialsDir		: __dirname + '/views/partials/',
	helpers			: {
		paginate: paginateHelper.createPagination
	}
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// Create database
var models = require('./models');
app.get('/sync', function(req, res){
	models.sequelize.sync().then(function(){
		res.send('database sync completed!');
	});
});


// Define your routes here
// Homepage
app.get('/', (req, res) => {
	let css = "./public/index-styles.css";
	
	let bookController = require("./controllers/bookController");
	bookController.getAll().then(data => {
		res.locals.books = data.rows;
		let categoryController = require("./controllers/categoryController");
		return categoryController.getAll();
	}).then(data => {
		res.locals.categories = data.rows;
		res.render('index', {css: css});
	})
	.catch(error => {
		next(error);
	});
});

// Login
app.get("/login", (req, res) => {
	let css = "./public/css/login.css";
	res.render('login', {css: css, layout: 'layout1.hbs'});
});

// Change password
app.get("/changepassword", (req, res) => {
	let css = "./public/css/change-password.css";
	res.render('changepassword', {css: css, layout: 'layout1.hbs'});
});

// Forget password
app.get("/forgetpassword", (req, res) => {
	let css = "./public/css/forget-password.css";
	res.render('forgetpassword', {css: css, layout: 'layout1.hbs'});
});

// Register
app.get("/register", (req, res) => {
	let css = "./public/css/Resigter.css";
	res.render('register', {css: css, layout: 'layout1.hbs'});
});

// Search page
app.get("/search", (req, res) => {
	let css = "./public/css/search.css";
	res.render('search', {css: css});
});

// View detail book
app.get("/BookDetail/:id", (req, res) => {
	let css = "/public/css/BookDetail.css";
	let bookController = require("./controllers/bookController");
	bookController.getById(req.params.id)
	.then(book => {
		res.locals.book = book;
		res.render('bookdetail', {css: css});
		// res.send(book);
		return book;
	})
	.then( (book) => {
		console.log(book.BookAuthors[0].Author.name);
	})
	.catch(error => next(error));
});
// Account info
app.get("/accountinfo", (req, res) => {
	let css = "./public/css/account-info.css";
	res.render('accountinfo', {css: css});
})

// MEMBER
// Manage book
app.get("/membermanagebook", (req, res) => {
	let css = "./public/css/member-manage-book.css";
	res.render('membermanagebook', {css: css});
});
// Dashboard
app.get("/memberdashboard", (req, res) => {
	let css = "./public/css/member-dashboard.css";
	res.render('memberdashboard', {css: css});
});

// ADMIN
// Add author
app.get("/addauthor", (req, res) => {
	let css = "./public/css/add-author.css";
	res.render('addauthor', {css: css});
});

// Add category
app.get("/addcategory", (req, res) => {
	let css = "./public/css/add-category.css";
	res.render('addcategory', {css: css});
});

// Manage category
app.get("/managecategory", (req, res) => {
	let css = "./public/css/manage-category.css";
	res.render('managecategory', {css: css});
});

// Manage author
app.get("/manageauthor", (req, res) => {
	let css = "./public/css/manage-author.css";
	res.render('manageauthor', {css: css});
});

// Register request offline
app.get("/registerrequestoffline", (req, res) => {
	let css = "./public/css/register-request-offline.css";
	res.render('registerrequestoffline', {css: css});
});

// Register request online
app.get("/registerrequestonline", (req, res) => {
	let css = "./public/css/register-request-online.css";
	res.render('registerrequestonline', {css: css});
});

// Set Server Port & Start Server
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log('Server is listening at port ' + app.get('port'));
});