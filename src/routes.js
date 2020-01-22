const {Router} = require('express');
const SearchController = require('./controllers/SearchController.js');
const DevController = require('./controllers/DevController.js');
const routes = Router();

routes.get("/devs",DevController.index);
routes.post("/devs", DevController.store);
routes.get("/search", SearchController.index);

module.exports = routes