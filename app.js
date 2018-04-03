require('dotenv').config();
const app = require('express')();
const consign = require('consign');

consign()
  .include('lib/config.js')
  .then('lib/database.js')
  .then('lib/staticFiles.js')
  .then('lib/localAuth.js')
  .then('lib/locals.js')
  .then('lib/errorHandlers.js')
  .then('lib/boot.js')
  .into(app);
