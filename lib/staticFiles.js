const path = require('path');
const express = require('express');

module.exports = (app) => {

  // 3rd party js
  app.use('/js', express.static(path.join(__dirname, '../node_modules/jquery/dist/')));
  app.use('/js', express.static(path.join(__dirname, '../node_modules/popper.js/dist/umd/')));
  app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js/')));

  // 3rd party css
  app.use('/css', express.static(path.join(__dirname, '../node_modules/bootswatch/dist/litera/')));
  app.use(express.static(path.join(__dirname, '../node_modules/font-awesome/')));

  // local
  app.use(express.static(path.join(__dirname, '../public/')));

};
