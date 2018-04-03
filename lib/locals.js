
module.exports = (app) => {

  app.use((req, res, next) => {
    res.locals.helpers = require('./helpers');
    res.locals.user = req.user || null;
    next();
  });

  app.use('/', require('../routes'));
};
