const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

let db = null;

module.exports = (app) => {

  if (!db) {
    const options = {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      params: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        pool: {
          max: 5,
          min: 0,
          idle: 1000
        },
        define: {
          freezeTableName: true,
          underscored: true,
        }
      }
    };

    const sequelize = new Sequelize(options.database, options.username, options.password, options.params);

    db = { sequelize, Sequelize, models: {} };

    const dir = path.join(__dirname, '../models');

    fs.readdirSync(dir).forEach(file => {
      const modelDir = path.join(dir, file);
      const model = sequelize.import(modelDir);
      db.models[model.name] = model;
    });

    Object.keys(db.models).forEach(key => {
      if ('associate' in db.models[key]) {
        db.models[key].associate(db.models);
      }
    });
  }

  app.db = db;
};
