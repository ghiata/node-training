'use strict';

const Authentication = {
  requireAuthentication(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }

    return res.redirect('/login');
  }
};

module.exports = Authentication;
