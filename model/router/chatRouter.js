const { request } = require("express");

module.exports = function(start) {
    start.get('/chat', function(resquest, response) {
        let queryString = request.query;
        response.render('chat', {pageNavigate: queryString});
    });
}