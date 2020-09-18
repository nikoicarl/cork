const { request } = require("express");

module.exports = function(start) {
    start.get('/', function(resquest, response) {
        let queryString = request.query;
        response.render('index', {pageNavigate: queryString});
    });
}