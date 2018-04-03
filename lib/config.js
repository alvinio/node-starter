const path = require('path');
const bodyParser = require('body-parser');

module.exports = (app) => {
  app.set('port', process.env.PORT || 4000);
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'pug');

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
};
