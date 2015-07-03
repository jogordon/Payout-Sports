module.exports = function(app) {
    /* GET home page. */
    app.get('/', function(req, res, next) {
        console.log("in get");
      res.render('index', { title: 'Express' });
    });
};