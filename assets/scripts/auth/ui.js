'use strict';

const store = require('../store');

const success = (/*data*/) => {
  // console.log(data);
};

const signInSuccess = data => {
  store.user = data.user;
  success(data);
  $('#change-pw').show();
  $('#sign-out').show();
  $('#sign-in').hide();
  $('#sign-up').hide();
};

const signOutSuccess = (/*data*/) => {
  store.user = null;
  store.game = null;
  // console.log(data);
  $('#change-pw').hide();
  $('#sign-out').hide();
  $('#sign-in').show();
  $('#sign-up').show();
};

const failure = (/*error*/) => {
  // console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
};
