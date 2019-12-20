console.log("Hello World!!!");
const express = require('express');
const app = express();

// set static folder
app.use(express.static(__dirname + '/public'));
// use handlebars
const hbs = require('express-handlebars');
app.engine('hbs', hbs({
    extname: 'hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    defaultLayout: 'layout'
}));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get("/", (req, res) => {
    let css = "index-styles.css";
    res.render('index', {css: css});
});

// start server
app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`server is listening on port ${app.get('port')}`);
});
