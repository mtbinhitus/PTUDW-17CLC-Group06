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
app.get("/", (req, res) => {
    let css = "./public/index-styles.css";
    res.render('index', {css: css});
});

app.get("/search", (req, res) => {
	let css = "./public/css/search.css";
	res.render('search', {css: css});
});

// Set Server Port & Start Server
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log('Server is listening at port ' + app.get('port'));
});