var exports = module.exports = {};

exports.home = (req, res) => {
  res.render('pages/home', { title: 'Homepage' });
};
