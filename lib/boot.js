
module.exports = (app) => {
  app.db.sequelize.sync().done(() => {
    const server = app.listen(app.get('port'), () => {
      process.stdout.write(`App is running on http://localhost:${server.address().port}`);
    });
  });
};


