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
};

const signOutSuccess = (data) => {
  store.user = null;
  store.game = null;
  console.log(data);
  $('#change-pw').hide();
  $('#sign-out').hide();
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
