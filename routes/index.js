const router = require('express').Router();
const passport = require('passport');

const indexController = require('../controllers/indexController');
const authController = require('../controllers/authController');

router.get('/', indexController.home);

router.get('/login', authController.signin);
router.get('/register', authController.signup);
router.get('/logout', authController.logout);
router.get('/profile', authController.profile);

router.post('/register', passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/register'
}
));

router.post('/login', passport.authenticate('local-signin', {
  successRedirect: '/profile',
  failureRedirect: '/login'
}));

module.exports = router;
