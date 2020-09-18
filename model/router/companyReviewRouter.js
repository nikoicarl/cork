const { request } = require("express");

module.exports = function(start) {
    start.get('/company_review', function(resquest, response) {
        let queryString = request.query;
        response.render('company_review', {pageNavigate: queryString});
    });
}