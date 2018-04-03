const passport = require('passport');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const LocalStrategy = require('passport-local').Strategy;

module.exports = (app) => {
  const User = app.db.models.Users;

  app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: new RedisStore({ url: process.env.CACHE, autoReconnect: true })
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, (req, email, password, done) => {


    User.findOne({ where: { email } })
      .then(user => {

        if (user) {
          return done(null, false, {
            message: 'That email is already taken'
          });
        } else {

          const data = {
            email,
            password
          };

          User.create(data)
            .then((newUser) => {
              if (!newUser) {
                return done(null, false);
              }

              return done(null, newUser);
            });
        }

      });


  }));

  passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, (req, email, password, done) => {


    User.findOne({ where: { email } })
      .then(user => {

        if (!user) {
          return done(null, false, {
            message: 'Email does not exist'
          });
        }

        if (!User.comparePassword(user.password, password)) {
          return done(null, false, {
            message: 'Incorrect Password'
          });
        }

        const userDetails = user.get();
        return done(null, userDetails);

      })
      .catch(err => {
        return done(null, false, { message: `Something went wrong with your credentials ${err}`});
      });


  }));
};


