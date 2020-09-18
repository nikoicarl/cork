const { request } = require("express");

module.exports = function(start) {
    start.get('/find_salaries', function(resquest, response) {
        let queryString = request.query;
        response.render('find_salaries', {pageNavigate: queryString});
    });
}