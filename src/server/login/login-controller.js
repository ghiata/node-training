'use strict';

const loginController = {
  /**
   * GET /users
   */
  getlogin(req, res) {
    res.status(200);
    res.send('login');
  },

  postlogin(req, res) {
    res.status(200);
    res.send('posted');
  }

};

module.exports = loginController;
