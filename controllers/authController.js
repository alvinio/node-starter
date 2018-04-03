
var exports = module.exports = {};

exports.signup = (req, res) => {
  if (req.user) return res.redirect('/');
  res.render('pages/register', { title: 'Sign up' });
};

exports.signin = (req, res) => {
  if (req.user) return res.redirect('/');
  res.render('pages/login', { title: 'Sign in' });
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};

exports.profile = (req, res) => {
  res.render('pages/profile', { title: 'My Profile'});
};
