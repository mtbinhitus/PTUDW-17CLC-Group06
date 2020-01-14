console.log("Hello World!!!");
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

// Session vs cart
let userController = require('./controllers/userController');
app.use(session({
	cookie: {httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000},
	secret: 'S3cret',
	resave: false,
	saveUninitialized: false
}));

app.use((req, res, next) => {
	res.locals.username = req.session.user ? req.session.user.email : '';
	res.locals.isLoggedIn = req.session.user ? true : false;
	res.locals.isAdmin = req.session.user? req.session.user.isadmin : false;
	res.locals.fullname = req.session.user ? req.session.user.lname + ' ' + req.session.user.fname : '';
	res.locals.avatar = req.session.user ? (req.session.user.avatar ? req.session.user.avatar : '/public/img/icon-user.png') : '/public/img/icon-user.png';
	next();
});

// Define your routes here
// Homepage
app.use('/',require('./routes/indexRouter'));

/*app.get('/', (req, res) => {
	let css = "./public/index-styles.css";
	let bookController = require("./controllers/bookController");
	bookController.getAll().then(data => {
		res.locals.books = data.rows;
		
		let categoryController = require("./controllers/categoryController");
		return categoryController.getAll();
	}).then(data => {
		res.locals.categories = data.rows;
		res.render('index', {css: css});
		console.log(res.locals.books);
	})
	.catch(error => {
		next(error);
	});
});*/

// Login
app.post("/login", (req, res) => {
	let email = req.body.email;
	let pass = req.body.pass;
	userController
		.getUserByEmail(email)
		.then(user => {
			if(user) {
				if(userController.comparePassword(pass, user.pass)) {
					req.session.user = user;
					res.redirect('/');
				} else {
					let css = "./public/css/login.css";
					res.render('login', {
						message: 'Incorrect password!',
						type: 'alert-danger',
						css: css, 
						layout: 'layout1.hbs'
					});
				}
			} else {
				let css = "./public/css/login.css";
				res.render('login', {
					message: 'Email does not exist!',
					type: 'alert-danger',
					css: css, 
					layout: 'layout1.hbs'
				});
			}
		})
});

app.get("/login", (req, res) => {
	let css = "./public/css/login.css";
	res.render('login', {css: css, layout: 'layout1.hbs'});
});

// Log out
app.get("/logout", (req, res, next) => {
	req.session.destroy(error => {
		if(error) {
			return next(error)
		} else {
			return res.redirect('/');
		}
	});
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

app.post("/register", (req, res, next) => {
	let user = {
		pass: req.body.pass,
		lname: req.body.lname,
		fname: req.body.fname,
		email: req.body.email,
		status: true
	};

	let confirm = (req.body.remember != undefined)
	
	// Check existed user
	userController
		.getUserByEmail(user.email)
		.then(usr => {
			if(usr) {
				let css = "./public/css/Resigter.css";
				return res.render('register', {
					message: 'Email ${user.email} exists! Please choose another email address.',
					type: 'alert-danger',
					css: css, 
					layout: 'layout1.hbs'
				});
			}
			return userController
				.createRegisterUser(user)
				.then(user => {
					res.render('login', {
						message: 'You have registered, now please login!',
						type: 'alert-primary',
						css: "./public/css/login.css", 
						layout: 'layout1.hbs'
					});
				});
		})
		.catch(error => next(error));
});

// Search page
app.get("/search", (req, res) => {
	console.log(req.query);
	let css = "./public/css/search.css";
	if((req.query.sort == null) || (req.query.sort.trim() == '')) {
		req.query.sort = 'titleDESC';
	}

	if((req.query.limit == null) || isNaN(req.query.limit)) {
		req.query.limit = 4;
	}

	if((req.query.keyword == null) || (req.query.keyword.trim() == '')) {
		req.query.keyword = '';
	}

	if((req.query.page == null) || isNaN(req.query.page)) {
		req.query.page = 1;
	}
	
	console.log(req.query);
	
	let bookController = require("./controllers/bookController");
	bookController.getAll(req.query)
	.then(data => {
		res.locals.books = data.rows;
		res.locals.pagination = {
			page: parseInt(req.query.page),
			limit: parseInt(req.query.limit),
			totalRows: data.count
		}
		// res.send(data);
		res.render('search', {css: css});
	})
	.catch(error => next(error));
	
});

// View detail book
app.get("/BookDetail/:id", (req, res) => {
	let css = "/public/css/BookDetail.css";
	let bookController = require("./controllers/bookController");

	bookController.getById(req.params.id).then(data => {
		res.locals.book = data;
		return bookController.getAuthorId(req.params.id);
	}).then(data => {
		res.locals.author = res.locals.book.BookAuthors[0].dataValues;
		console.log(res.locals.author.authorName);
		// res.send(res.locals.book);
		// return bookController.getCategoriseById(req.params.id);
		res.render('bookdetail', {css: css});
	})
	.catch(error => {
		next(error);
	});

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

// Manager dashboard
app.get("/manager-dashboard", (req, res) => {
	let css = "./public/css/manager-dashboard.css";
	res.render('manager-dashboard', {css: css});
});

// Add book 
app.get("/add-book", (req, res) => {
	let css = "./public/css/add-book.css";
	res.render('add-book', {css: css});
});

// Manage Book
app.get("/managebook", (req, res) => {
	let css = "./public/css/manageBook.css";
	res.render('managebook', {css: css});
});

// Manage Borrow Book
app.get("/manageborrowbook", (req, res) => {
	let css = "./public/css/manageBorrowBook.css";
	res.render('manageborrowbook', {css: css});
});

// Config rule
app.get("/configrule", (req, res) => {
	let css = "./public/css/configRule.css";
	res.render('configrule', {css: css});
});

// Add post
app.get("/addpost", (req, res) => {
	let css = "./public/css/post.css";
	res.render('addpost', {css: css});
});

// Borrow request online
app.get("/borrow-request-online", (req, res) => {
	let css = "./public/css/borrow-request-online.css";
	res.render('borrow-request-online', {css: css});
});

// Borrow request offline
app.get("/borrow-request-offline", (req, res) => {
	let css = "./public/css/borrow-request-offline.css";
	res.render('borrow-request-offline', {css: css});
});

// Set Server Port & Start Server
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log('Server is listening at port ' + app.get('port'));
});