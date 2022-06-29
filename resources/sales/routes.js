const verifyToken = require('../../middlewares/auth');
const Sales = require('./controller');

module.exports = (app) => {
    app.get("/sales", verifyToken, Sales.getByResource);
}
