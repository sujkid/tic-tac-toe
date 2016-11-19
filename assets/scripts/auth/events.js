'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
const gameEvent = require('../game/events');
const store = require('../store');

const onSignUp = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signUp(data)
    .then(ui.success)
    .catch(ui.failure);

  // $('#sign-up-modal').modal().hide();
};

const onSignIn = function (event) {
  let data = getFormFields(this);

  // debugger;
  if (store.user === null || typeof store.user === 'undefined') {
    event.preventDefault();
    api.signIn(data)
      .then(ui.signInSuccess)
      .catch(ui.failure);
  } else {
    $('#auth-msg').show();
    $('#auth-msg').text('Please log out to sign in again');
  }
};

const onUpdatePassword = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.updatePassword(data)
    .then(ui.success)
    .catch(ui.failure);
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
   .then(ui.signOutSuccess)
   .catch(ui.failure);
  gameEvent.onResetGame();
};

const addHandlers = () => {
  $('.sign-up-form').on('submit', onSignUp);
  $('.sign-in-form').on('submit', onSignIn);
  $('.change-pw-form').on('submit', onUpdatePassword);
  $('#sign-out').on('click', onSignOut);
};

module.exports = {
  addHandlers,
};
